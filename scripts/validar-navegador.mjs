import fs from 'node:fs';
import {target} from './cdp.mjs';
const {cdp:c,close}=await target(process.env.CDP_URL || 'http://127.0.0.1:19349');
const base=process.env.SITE_URL || 'http://127.0.0.1:18789/';
const results=[];
const check=(name,ok,detail)=>results.push({name,ok:!!ok,...(detail===undefined?{}:{detail})});
await c.send('Page.enable');await c.send('Runtime.enable');await c.send('Network.enable');
const navigate=async(file)=>{const loaded=c.once('Page.loadEventFired');await c.send('Page.navigate',{url:base+file});await loaded;await c.evaluate(`Promise.all([...document.images].map(i=>{i.loading="eager";return i.decode().catch(()=>{});}))`);};
const viewport=width=>c.send('Emulation.setDeviceMetricsOverride',{width,height:1000,deviceScaleFactor:1,mobile:false});
fs.mkdirSync('docs/capturas-ux',{recursive:true});
try {
for(const width of [375,768,1440]) {
 await viewport(width);
 for(const file of ['index.html','2_experienciaLaboral.html','3_portafolio.html','4_contactame.html','formacion.html']) {
  await navigate(file);
  const state=await c.evaluate(`({overflow:document.documentElement.scrollWidth>innerWidth,broken:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),brand:document.querySelector('.brand').textContent,bodyFont:parseFloat(getComputedStyle(document.body).fontSize),sticky:getComputedStyle(document.querySelector('.site-header')).position,menuFont:parseFloat(getComputedStyle(document.querySelector('nav a')).fontSize),background:getComputedStyle(document.body).backgroundImage})`);
  check(file+' '+width+' layout',!state.overflow&&state.broken.length===0&&state.brand==='PORTAFOLIO'&&state.sticky==='sticky'&&state.bodyFont>=(width===1440?18:16)&&state.menuFont>=16&&state.background==='none',state);
  const screenshot=await c.send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true});fs.writeFileSync('docs/capturas-ux/'+file.replace('.html','')+'-'+width+'.png',Buffer.from(screenshot.data,'base64'));
 }
 await navigate('index.html');
 check('Inicio: tres secciones ordenadas '+width,await c.evaluate(`JSON.stringify([...document.querySelector('main').children].map(el=>el.id||el.className))===JSON.stringify(['hero-panel','habilidades','sobre-mi'])`));
 for(const id of ['habilidades','sobre-mi']) {
  await c.evaluate(`document.querySelector('[data-home-section="${id}"]').click()`);
  await c.evaluate(`new Promise(r=>setTimeout(r,1300))`);
  const state=await c.evaluate(`({path:location.pathname,top:document.getElementById('${id}').getBoundingClientRect().top,bottom:document.querySelector('header').getBoundingClientRect().bottom,active:document.querySelector('nav [aria-current]')?.dataset.homeSection})`);
  check('Ancla visible y activa '+id+' '+width,state.path.endsWith('index.html')&&state.top>=state.bottom&&state.active===id,state);
 }
 if(width===375) {
  await c.evaluate(`document.querySelector('[data-menu-toggle]').click()`);
  check('Menú móvil abierto y foco en primer enlace',await c.evaluate(`document.querySelector('[data-menu-toggle]').getAttribute('aria-expanded')==='true'&&document.activeElement===document.querySelector('nav a')`));
  await c.send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
  check('Escape cierra menú y devuelve foco',await c.evaluate(`document.querySelector('[data-menu-toggle]').getAttribute('aria-expanded')==='false'&&document.activeElement===document.querySelector('[data-menu-toggle]')`));
 }
}
await viewport(1440);await navigate('2_experienciaLaboral.html');
check('Experiencia ascendente 2023 → 2025',await c.evaluate(`[...document.querySelectorAll('.experience-year time')].map(t=>t.textContent).join(',')==='2023,2025'`));
await navigate('3_portafolio.html');
for(const [filter,count] of [['java',3],['python',3],['dotnet',2],['opengl',2],['all',9]]) {
 await c.evaluate(`document.querySelector('[data-filter="${filter}"]').click()`);
 check('Filtro '+filter,await c.evaluate(`document.querySelectorAll('[data-project]:not([hidden])').length===${count}`));
}
await navigate('4_contactame.html');
check('Tres canales con logo y nombre accesible',await c.evaluate(`document.querySelectorAll('.contact-channel[aria-label] svg').length===3&&[...document.querySelectorAll('.contact-channel h2')].every(h=>h.classList.contains('sr-only'))`));
await c.evaluate(`document.querySelector('#validar-datos').click()`);
check('Formulario vacío: cuatro errores y foco',await c.evaluate(`document.querySelectorAll('[aria-invalid="true"]').length===4&&document.activeElement.id==='nombre'&&document.querySelector('#estado-formulario').dataset.state==='error'`));
for(const phone of ['0991234567','+593 99-123-4567']) {
 await c.evaluate(`for(const [id,value] of Object.entries({nombre:'Prueba de validación',email:'test@example.com',celular:'${phone}',mensaje:'Consulta de prueba'})){const f=document.getElementById(id);f.value=value;f.dispatchEvent(new Event('input',{bubbles:true}));}document.querySelector('#validar-datos').click();`);
 check('Celular válido '+phone,await c.evaluate(`document.querySelector('#estado-formulario').dataset.state==='success'&&document.querySelector('#celular').value==='${phone}'`));
}
await c.evaluate(`document.querySelector('#solicitar-limpieza').click();document.querySelector('#cancelar-borrado').click()`);
check('Cancelar limpieza conserva datos',await c.evaluate(`document.querySelector('#nombre').value==='Prueba de validación'&&document.querySelector('#confirmar-limpieza').hidden`));
await c.evaluate(`document.querySelector('#solicitar-limpieza').click();document.querySelector('#confirmar-borrado').click()`);
check('Confirmar limpieza vacía y devuelve foco',await c.evaluate(`[...document.querySelectorAll('input,textarea')].every(f=>!f.value)&&document.activeElement.id==='nombre'`));
await navigate('index.html');
await c.send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
check('Movimiento reducido',await c.evaluate(`getComputedStyle(document.documentElement).scrollBehavior==='auto'&&getComputedStyle(document.querySelector('.skill-card')).transitionDuration==='0s'`));
await c.send('Emulation.setEmulatedMedia',{features:[]});
await c.evaluate(`document.querySelector('[data-theme-toggle]').click()`);
check('Tema claro',await c.evaluate(`document.documentElement.dataset.theme==='light'&&localStorage.getItem('fernanda-tema')==='light'`));
await navigate('3_portafolio.html');check('Tema persiste al navegar',await c.evaluate(`document.documentElement.dataset.theme==='light'`));
await c.evaluate(`document.querySelector('[data-theme-toggle]').click()`);
check('Regreso al tema oscuro',await c.evaluate(`document.documentElement.dataset.theme==='dark'`));
for(const file of ['sobre-mi.html','habilidades.html']) {
 await navigate(file);await c.evaluate(`new Promise(r=>setTimeout(r,1000))`);
 check('Ruta anterior '+file,await c.evaluate(`location.pathname.endsWith('index.html')&&location.hash==='#${file.replace('.html','')}'`));
}
await c.send('Emulation.setScriptExecutionDisabled',{value:true});
await viewport(375);await navigate('index.html');
check('Navegación disponible sin JavaScript',await c.evaluate(`getComputedStyle(document.querySelector('nav')).display!=='none'&&document.querySelectorAll('nav a').length===6`));
await c.send('Emulation.setScriptExecutionDisabled',{value:false});
check('Sin errores de JavaScript',!c.events.some(e=>e.method==='Runtime.exceptionThrown'));
check('Sin recursos HTTP fallidos',!c.events.some(e=>e.method==='Network.responseReceived'&&e.params.response.status>=400));
} finally {
 fs.writeFileSync('docs/resultado-validacion-ux.json',JSON.stringify({date:new Date().toISOString(),browser:'Edge 155 headless',base,total:results.length,passed:results.filter(r=>r.ok).length,results},null,2));
 console.log(JSON.stringify({total:results.length,passed:results.filter(r=>r.ok).length,failures:results.filter(r=>!r.ok)},null,2));process.exitCode=results.some(r=>!r.ok)?1:0;await close();
}
