import fs from 'node:fs';
import {target} from './cdp.mjs';
const {cdp:c,close}=await target(process.env.CDP_URL || 'http://127.0.0.1:19349');
await c.send('Page.enable');await c.send('Runtime.enable');
await c.send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false});
const loaded=c.once('Page.loadEventFired');await c.send('Page.navigate',{url:new URL('index.html', process.env.SITE_URL || 'http://127.0.0.1:18789/').href});await loaded;
const results=[];
for(const theme of ['dark','light']) {
 await c.evaluate(`document.documentElement.dataset.theme='${theme}'`);
 const ratios=await c.evaluate(`(()=>{const style=getComputedStyle(document.documentElement);const rgb=v=>(v.trim().length===4?v.trim().slice(1).split('').map(c=>c+c).join(''):v.trim().slice(1)).match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);const lum=v=>{const [r,g,b]=rgb(style.getPropertyValue(v));return .2126*r+.7152*g+.0722*b;};const ratio=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);};return [['--text','--bg'],['--muted','--bg'],['--text','--card'],['--muted','--card'],['--accent','--card'],['--button-text','--button'],['--nav-text','--nav-bg'],['--nav-active','--nav-bg'],['--error','--card'],['--success','--card'],['--muted','--card-deep']].map(([a,b])=>({foreground:a,background:b,ratio:ratio(a,b)}));})()`);
 results.push({theme,ratios,pass:ratios.every(r=>r.ratio>=4.5)});
}
await c.evaluate(`document.documentElement.dataset.theme='dark';document.activeElement.blur()`);
await c.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
const keyboard=await c.evaluate(`({first:document.activeElement.className,visible:getComputedStyle(document.activeElement).outlineStyle!=='none'})`);
results.push({name:'Primer Tab: saltar contenido con foco visible',...keyboard,pass:keyboard.first==='skip-link'&&keyboard.visible});
await c.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Enter',code:'Enter',windowsVirtualKeyCode:13});
results.push({name:'Enter salta al contenido principal',pass:await c.evaluate(`document.activeElement.id==='contenido'`)});
fs.writeFileSync('docs/contraste-y-teclado-ux.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results,null,2));process.exitCode=results.some(r=>!r.pass)?1:0;await close();
