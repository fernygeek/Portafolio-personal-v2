# Portafolio personal · Fernanda Rueda

Portafolio con fondo verde menta y decoración botánica, paneles azul marino redondeados y una barra de navegación verde flotante. La portada combina una presentación con retrato y seis paneles: Sobre mí, Experiencia, Formación, Proyectos, Habilidades y Contacto. Los títulos usan Consolas y alternativas monoespaciadas; el cuerpo usa Segoe UI y fuentes del sistema. Implementado con HTML, CSS y JavaScript nativos, sin dependencias ni compilación.

Revisión visual actual: **19 de octubre de 2026**, siguiendo la nueva referencia verde elegida por la usuaria. La composición y las decisiones vigentes se describen en [Diseño verde](docs/DISENO_VERDE.md). Los documentos de la propuesta anterior se conservan como historial.

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

- `index.html`: presentación y seis paneles en dos columnas en escritorio; biografía completa, formación en curso, experiencia, proyectos, habilidades y formulario de contacto integrado.
- `3_portafolio.html`: nueve proyectos en una cuadrícula de dos columnas en escritorio y una en móvil; filtros por tecnología, descripciones originales y capturas ampliables.
- `2_experienciaLaboral.html`: participación en investigación de 2025 y pasantía de 2023.
- `4_contactame.html`: canales de contacto y formulario con los mismos campos y validación que el de Inicio.
- `estilos.css`, `app.js`, `tema.js`, `contacto.js`: estilos e interacciones compartidas, tema y formulario.
- `img/`: catorce imágenes originales conservadas y `botanica.svg`, recurso decorativo nuevo.
- `docs/`: análisis, maquetas, registros y capturas de validación de cada versión.
- `EVALUACION_HEURISTICAS.md`: matriz de las diez heurísticas y resultados reales de comprobación.

El tema inicial combina paneles oscuros y fondo menta; también hay una variante clara. La preferencia se conserva entre páginas. Los filtros y el menú móvil se mejoran con JavaScript; el contenido y la navegación siguen disponibles sin él. La formación, los proyectos y las habilidades proceden del contenido original; no se añadieron CV, certificaciones, porcentajes de dominio ni datos profesionales inventados.

## Contacto

Los formularios de Inicio y Contacto **validan y no envían mensajes**. Ambos solicitan nombre, correo, celular y mensaje, explican su alcance antes de introducir datos y al confirmar la validación, y protegen el borrado con una confirmación. No hay backend ni almacenamiento de esos datos. Los canales son los enlaces originales de LinkedIn y WhatsApp. El número `+593 99 999 9999` se conserva desde la fuente y sigue pendiente de confirmación; no se inventó un reemplazo ni un correo de destino.

## Verificar

```powershell
node scripts/validar.mjs
```

La comprobación estática revisa archivos, referencias locales, anclas y sintaxis JavaScript. La revisión verde pasó la comprobación de los cuatro HTML y tres JavaScript sin errores. No sustituye una revisión en navegador; el alcance y los límites figuran en [EVALUACION_HEURISTICAS.md](EVALUACION_HEURISTICAS.md).

La versión verde obtuvo **116/116 comprobaciones correctas en Edge 155**, con 24 vistas de las cuatro páginas sin desbordamiento ni imágenes rotas, pruebas de ambos formularios, filtros, menú, temas y alternativa sin JavaScript. Registro: [resultado-validacion-verde.json](docs/resultado-validacion-verde.json). Capturas: [Inicio escritorio](docs/capturas-verde/inicio-escritorio.png), [Inicio móvil](docs/capturas-verde/inicio-movil-completo.png), [Proyectos](docs/capturas-verde/proyectos-movil.png) y [Contacto](docs/capturas-verde/contacto-movil.png). No se probó lector de pantalla, zoom real al 200 % ni dispositivos físicos.

El registro `docs/resultado-validacion.json` y las capturas de `docs/capturas/` documentan la **versión anterior**, que obtuvo 94/94 comprobaciones correctas. Ese resultado se conserva como historial separado de la validación verde actual.

## Publicación posterior

El sitio puede alojarse como archivos estáticos. Basta publicar los cuatro HTML, CSS, JavaScript, `favicon.svg` e `img/`, manteniendo las rutas. No se requiere un servidor de aplicación. Esta entrega no incluye publicación ni commits.

La fuente original se describe como «Mi Web Personal: sitio web personal que muestra mi perfil profesional, experiencia, proyectos y un formulario de contacto con validación en HTML5». El ZIP y el portafolio original permanecieron intactos.
