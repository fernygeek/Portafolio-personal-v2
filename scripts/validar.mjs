import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
const root = path.resolve(process.argv[2] || process.cwd());
const expected = ['index.html','2_experienciaLaboral.html','3_portafolio.html','4_contactame.html'];
const errors=[], warnings=[], pages=new Map();
const attributes = text => Object.fromEntries([...text.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s'"=<>`]+))/g)].map(m=>[m[1].toLowerCase(),m[2]??m[3]??m[4]]));
for (const file of expected) {
  const full=path.join(root,file);
  if(!fs.existsSync(full)){errors.push(`Missing HTML: ${file}`);continue;}
  const html=fs.readFileSync(full,'utf8');
  const tags=[...html.matchAll(/<([a-z][\w:-]*)\b([^<>]*?)>/gi)].map(m=>({name:m[1].toLowerCase(),...attributes(m[2])}));
  const ids=tags.filter(t=>t.id).map(t=>t.id);
  const duplicates=ids.filter((id,i)=>ids.indexOf(id)!==i);
  if(duplicates.length)errors.push(`${file}: duplicate IDs ${duplicates.join(', ')}`);
  const h1=(html.match(/<h1\b/gi)||[]).length;
  if(h1!==1)errors.push(`${file}: expected 1 h1, found ${h1}`);
  for(const image of tags.filter(t=>t.name==='img'))if(!Object.hasOwn(image,'alt'))warnings.push(`${file}: image lacks alt: ${image.src}`);
  pages.set(file,{html,tags,ids:new Set(ids)});
}
for(const [file,{html,tags}] of pages) {
  for(const tag of tags){
    const value=tag.name==='a'||tag.name==='link'?tag.href:tag.src;
    if(!value||/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(value))continue;
    const url=new URL(value,'http://local/'+file);
    const target=decodeURIComponent(url.pathname.slice(1));
    const local=path.resolve(root,target);
    if(!fs.existsSync(local)){errors.push(`${file}: missing local target ${value}`);continue;}
    if(url.hash&&pages.has(target)&&!pages.get(target).ids.has(decodeURIComponent(url.hash.slice(1))))errors.push(`${file}: missing fragment ${value}`);
  }
  for(const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)){
    const attrs=attributes(m[1]);
    if(attrs.src||attrs.type==='application/ld+json'||!m[2].trim())continue;
    const mode=attrs.type==='module'?'module':'commonjs';
    const result=spawnSync(process.execPath,['--check','--input-type='+mode],{input:m[2],encoding:'utf8'});
    if(result.status!==0)errors.push(`${file}: inline JS syntax: ${result.stderr.trim()}`);
  }
}
const scriptFiles=new Set([...pages.values()].flatMap(p=>p.tags.filter(t=>t.name==='script'&&t.src&&!/^(https?:|data:)/.test(t.src)).map(t=>t.src)));
for(const file of scriptFiles){
  const result=spawnSync(process.execPath,['--check',path.join(root,file)],{encoding:'utf8'});
  if(result.status!==0)errors.push(`${file}: JS syntax: ${result.stderr.trim()}`);
}
console.log(JSON.stringify({pages:pages.size,externalScriptsChecked:scriptFiles.size,errors,warnings},null,2));
process.exitCode=errors.length?1:0;
