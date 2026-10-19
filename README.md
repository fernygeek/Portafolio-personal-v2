# Portafolio personal · Fernanda Rueda

Rediseño local en negro y naranja, con presentación editorial, navegación superior y fotografía a la derecha. Implementado con HTML, CSS y JavaScript nativos, sin dependencias ni compilación.

## Abrir el sitio

Abre `index.html` en un navegador. Para servirlo por HTTP con Node.js instalado:

```powershell
node scripts/servidor.mjs
```

Visita **http://127.0.0.1:4173**. Detén el servidor con `Ctrl+C`. Si ese puerto está ocupado, puedes elegir otro:

```powershell
$env:PORT = '4174'
node scripts/servidor.mjs
```

## Contenido y estructura

- `index.html`: presentación, proyectos seleccionados, biografía completa, habilidades y resumen de experiencia.
- `3_portafolio.html`: nueve proyectos, filtros por tecnología, descripciones originales y capturas ampliables.
- `2_experienciaLaboral.html`: participación en investigación de 2025 y pasantía de 2023.
- `4_contactame.html`: enlaces de contacto y formulario de validación.
- `estilos.css`, `app.js`, `tema.js`, `contacto.js`: estilos e interacciones compartidas, tema y formulario.
- `img/`: catorce recursos originales conservados.
- `docs/`: análisis, maquetas y capturas de validación.
- `EVALUACION_HEURISTICAS.md`: matriz de las diez heurísticas y resultados reales de comprobación.

El tema inicial es oscuro; la preferencia de tema se conserva entre páginas. Los filtros y el menú móvil se mejoran con JavaScript; el contenido y la navegación siguen disponibles sin él.

## Contacto

El formulario **valida y no envía mensajes**. Lo explica antes de introducir datos y al confirmar la validación. Sus datos no se guardan. Los canales son los enlaces originales de LinkedIn y WhatsApp. El número `+593 99 999 9999` se conserva desde la fuente y sigue pendiente de confirmación; no se inventó un reemplazo ni un correo de destino.

## Verificar

```powershell
node scripts/validar.mjs
```

La comprobación estática revisa archivos, referencias locales, anclas y sintaxis JavaScript. No sustituye una revisión en navegador; el alcance de las pruebas realizadas figura en `EVALUACION_HEURISTICAS.md`.

## Publicación posterior

El sitio puede alojarse como archivos estáticos. Basta publicar los cuatro HTML, CSS, JavaScript, `favicon.svg` e `img/`, manteniendo las rutas. No se requiere un servidor de aplicación. Esta entrega no incluye publicación ni commits.

La fuente original se describe como «Mi Web Personal: sitio web personal que muestra mi perfil profesional, experiencia, proyectos y un formulario de contacto con validación en HTML5». El ZIP y el portafolio original permanecieron intactos.
