# Portafolio personal · Fernanda Rueda

Sitio estático con HTML, CSS y JavaScript nativos, sin dependencias npm ni compilación. Identidad azul oscuro y verde menta, con tema claro opcional.

## Ejecutar

```powershell
node scripts/servidor.mjs
```

Abre http://127.0.0.1:4173. Detén el servidor con Ctrl+C; PORT permite seleccionar otro puerto.

## Estructura actual

- index.html: Inicio → Habilidades → Sobre mí, con fotografía, diez tecnologías documentadas en los proyectos, biografía completa y resumen académico.
- 2_experienciaLaboral.html: pasantía de 2023 e investigación de 2025, en orden ascendente.
- 3_portafolio.html: nueve proyectos, filtros y descripciones completas.
- 4_contactame.html: canales con logos locales y formulario con validación y confirmación de borrado.
- formacion.html: formación y asignaturas vinculadas a los proyectos.
- sobre-mi.html y habilidades.html: conservan las rutas anteriores y redirigen a Inicio, con enlace alternativo accesible.
- estilos.css, app.js, tema.js y contacto.js: estilos y comportamiento compartidos.
- img/logos/: SVG locales y licencias de Devicon y Font Awesome. Las catorce imágenes originales se conservan; el antiguo patrón botánico ya no se utiliza.

La navegación permanece visible, resalta la página o sección activa y conserva el tema y Hablemos. Sin JavaScript, el contenido y los enlaces siguen disponibles. Se respeta la preferencia de movimiento reducido.

## Contacto

El formulario valida nombre, correo, celular ecuatoriano y mensaje. **No envía ni guarda los datos**. Conserva ayuda, errores y confirmación antes de borrar. Los enlaces originales permanecen; el número de WhatsApp de la fuente está pendiente de confirmación por la propietaria.

## Verificar

```powershell
node scripts/validar.mjs
```

Revisa siete HTML, rutas, anclas y sintaxis de tres JavaScript del sitio. La revisión en Edge 155 obtuvo **47/47 comprobaciones funcionales**, más **22 pares de contraste de texto** en ambos temas y dos pruebas de teclado. Hay capturas de cinco páginas a 375, 768 y 1440 px en docs/capturas-ux/.

Consulta [la evaluación y sus límites](EVALUACION_HEURISTICAS.md), [resultados funcionales](docs/resultado-validacion-ux.json), [contraste y teclado](docs/contraste-y-teclado-ux.json) y [conservación de contenido](docs/conservacion-contenidos-ux.json).

Para repetir las pruebas, inicia el servidor con PORT=18789 y una instancia independiente de Edge con depuración:

```powershell
Start-Process -FilePath 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe' -ArgumentList '--headless','--disable-gpu','--no-first-run','--remote-debugging-port=19349',"--user-data-dir=$env:TEMP\fernanda-ux-qa",'about:blank' -WindowStyle Hidden
node scripts/validar-navegador.mjs
node scripts/validar-contraste.mjs
```

Requiere Node.js 22 para WebSocket nativo. SITE_URL y CDP_URL permiten cambiar las direcciones predeterminadas. Los scripts regeneran informes y capturas. Cierra la instancia de pruebas y detén el servidor al terminar.

## Publicación

GitHub Pages sirve directamente HTML, CSS, JavaScript, favicon e imágenes, conservando las rutas relativas. No se modificó el despliegue ni se crearon commits o ejecutó push. Los informes anteriores se conservan como historial y no describen la distribución actual.
