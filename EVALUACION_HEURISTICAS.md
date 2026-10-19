# Evaluación de las diez heurísticas de Nielsen

**Revisión actual: 19 de octubre de 2026.** Alcance: nueva versión verde del portafolio de Fernanda Rueda. Fuente del contenido: `Mi-Web-Personal-main.zip`.

## 1. Versión evaluada y trazabilidad

La referencia elegida ahora usa **fondo verde menta con decoración botánica, paneles azul marino redondeados y una barra verde flotante**. La portada contiene una presentación con retrato y seis paneles: Sobre mí, Experiencia, Formación, Proyectos, Habilidades y Contacto. En escritorio se distribuyen en dos columnas. Los titulares usan **Consolas** y alternativas monoespaciadas; el catálogo presenta dos tarjetas por fila, con imágenes sin recortar y una columna en móvil.

La formación procede de la carrera y la institución ya documentadas y de las asignaturas citadas en los proyectos. Se mantienen las cuatro páginas, nueve proyectos, catorce imágenes originales y la biografía completa; `img/botanica.svg` es decoración nueva. No se añadieron CV, certificaciones, porcentajes de dominio ni datos profesionales inventados. El formulario también está integrado en el panel de Contacto de Inicio y mantiene los campos y la validación de la página Contacto.

Esta revisión distingue **código inspeccionado**, **pruebas ejecutadas de la versión verde**, **resultados históricos** y **comprobaciones pendientes**. Las 94/94 comprobaciones de la propuesta negra/naranja pertenecen a la **versión anterior**; su registro y capturas se conservan en la sección 5. No demuestran que la nueva composición haya superado esas mismas pruebas.

La composición y sus decisiones se documentan en [Diseño verde](docs/DISENO_VERDE.md). La revisión heurística no es una prueba con usuarios ni una certificación global de conformidad WCAG.

## 2. Matriz de aplicación y evidencia de la versión verde

Marco de referencia: [Jakob Nielsen, diez heurísticas de usabilidad, Nielsen Norman Group](https://www.nngroup.com/articles/ten-usability-heuristics/). La columna de estado describe exclusivamente lo comprobado en esta revisión. El registro actual de Edge contiene 116/116 comprobaciones correctas; sus casos y límites se detallan en la sección 4.

| Heurística | Aplicación concreta | Evidencia en archivos y selectores | Estado de la versión verde |
| --- | --- | --- | --- |
| **1. Visibilidad del estado del sistema** | La página actual, el tema y los filtros exponen su estado. Los resultados del formulario distinguen errores, datos válidos y ausencia de envío. | Cuatro HTML: `.primary-navigation a[aria-current="page"]`. `app.js`: `[data-theme-toggle]`, `[data-filter]`, `aria-pressed`, `[data-project-status]`. `index.html` y `4_contactame.html`: `#estado-formulario[role="status"]`, `aria-live="polite"`. | **Implementada y comprobada en Edge:** tema, filtros, recuentos y mensajes de validación. Anuncios con lector de pantalla no probados. |
| **2. Correspondencia con el mundo real** | Las secciones se identifican por nombres familiares. La formación se presenta como «en curso». El celular incluye ejemplos ecuatorianos; ambos formularios explican que solo validan. | `index.html`: `.panel-grid > .portfolio-panel`, `#formacion`, `.education-card`. Ambos formularios: etiquetas `for`, `#formulario-ayuda`, `#celular-ayuda`. | **Implementada y comprobada:** contenido contrastado con la fuente; formatos local/internacional y mensajes de ambos formularios probados en Edge. Sin prueba de comprensión con usuarios. |
| **3. Control y libertad** | El menú se abre y cierra, enfoca su primer enlace y permite salir con Escape devolviendo el foco. Los detalles nativos son reversibles. Limpiar solicita confirmación, ofrece conservar los datos y admite Escape. | `app.js`: `[data-menu-toggle]`, `[data-navigation]`, `setMenu()`, `aria-expanded`. `3_portafolio.html`: `details.project-details > summary`. Ambos formularios y `contacto.js`: `#confirmar-limpieza`, `#cancelar-borrado`, `requestClear()`, `hideConfirmation()`. | **Implementada y comprobada en Edge:** menú con foco/Tab/Escape, detalles por puntero, confirmación, cancelación, borrado y restauración del foco en ambos formularios. La activación de detalles con teclado no se probó expresamente. |
| **4. Consistencia y estándares** | Las cuatro páginas comparten barra flotante, controles, pie, temas y sistema de paneles. Se mantienen enlaces para destinos y botones para acciones, HTML semántico y desplegables nativos. | `.site-header`, `.primary-navigation`, `.header-actions`, `.site-footer`, `.button-primary`, `main#contenido`; `estilos.css`. Interiores: `.interior-main`, `.interior-surface`. | **Implementada y comprobada:** revisión estática de cuatro HTML y tres JavaScript sin errores; 24/24 vistas correctas y cabecera flotante comprobada a 881, 1024 y 1440 px. |
| **5. Prevención de errores** | Las instrucciones preceden a los campos. Se validan datos obligatorios, correo y celular sin alterar lo escrito. El borrado requiere confirmación y la validación no se presenta como un envío. | `index.html` y `4_contactame.html`: `required`, `type="email"`, ayuda del celular y confirmación. `contacto.js`: `errorFor()`, normalización de una copia del celular, `resetAllowed`, cancelación del evento de envío. | **Implementada y comprobada en ambos formularios:** vacíos, datos inválidos/válidos, conservación y limpieza sin solicitudes de red. Número de WhatsApp sin titularidad confirmada. |
| **6. Reconocimiento antes que recuerdo** | Los seis paneles tienen títulos. Cada proyecto muestra nombre, captura, resumen y tecnologías; los filtros usan texto. La página actual tiene subrayado además de color y cada descripción incluye el nombre del proyecto en su etiqueta accesible. | `index.html`: `.panel-heading`, `.mini-project`, `.tech-ribbon`. `3_portafolio.html`: `.project-entry`, `.project-summary`, `.tech-list`, `summary .sr-only`. `estilos.css`: `[aria-current]::after`. | **Implementada y comprobada parcialmente:** nueve descripciones preservadas, seis paneles en el orden previsto y filtros correctos en Edge. Sin prueba de localización/comprensión con usuarios o lector de pantalla. |
| **7. Flexibilidad y eficiencia** | Hay salto al contenido, accesos a paneles, enlaces a proyectos concretos, filtros y vuelta a Todos. Un enlace directo revela el proyecto y abre su detalle. El tema se conserva entre páginas. | `.skip-link[href="#contenido"]`, `main#contenido`, `#sobre-mi`, `#habilidades`, `.mini-project`; `app.js`: `filterProjects()`, `revealLinkedProject()`, `hashchange`, `localStorage`; `tema.js`. | **Implementada y comprobada en Edge:** filtros Java 3, Python 3, C#/.NET 2, OpenGL 2, Todos 9; anclas al cargar y tras filtrar; salto con foco en `main`; tema persistente y contenido/navegación sin JavaScript. |
| **8. Diseño estético y minimalista** | Fondo botánico decorativo, paneles navy y acentos verdes siguen la referencia. La portada agrupa seis temas; los detalles completos se consultan bajo demanda. El catálogo usa dos columnas y una en móvil. | `estilos.css`: tokens, `.hero-panel`, `.panel-grid`, `.portfolio-panel`, `.project-list`, media queries y `object-fit: contain`. `img/botanica.svg`. Titulares con `--display: Consolas`. | **Implementada y comprobada:** 24/24 vistas sin desbordamiento ni imágenes rotas; seis paneles en dos/una columnas; ambos temas y contraste básico comprobados. No hay prueba real de zoom al 200 %. |
| **9. Reconocer, diagnosticar y recuperarse de errores** | Cada error indica una corrección concreta. El resumen enlaza campos afectados; se enfoca el primero inválido y se conservan los demás datos. Los errores se actualizan al corregir. | `contacto.js`: `setFieldError()`, `showErrorSummary()`, `aria-invalid`, `aria-describedby`, `.focus()`, eventos `input`. Ambos formularios: `#nombre-error`, `#email-error`, `#celular-error`, `#mensaje-error`. | **Implementada y comprobada en Inicio y Contacto:** cuatro campos vacíos identificados, primer error enfocado, datos inválidos detectados y valores conservados al corregir/validar. No se comprobó anuncio con lector de pantalla. |
| **10. Ayuda y documentación** | Ayuda junto al celular, alcance del formulario visible y confirmación de borrado. Accesos a canales reales conservados y alternativa sin JavaScript. Documentación distingue la versión vigente de su historial. | Ambos formularios: `.field-help`, `#formulario-ayuda`, `#celular-ayuda`, `noscript`; `.contact-shortcuts`, `.contact-channels`. [README](README.md) y este documento. | **Implementada y comprobada parcialmente:** instrucciones, mensajes y alternativa sin JavaScript presentes; ambas acciones de formulario ocultas y deshabilitadas sin JavaScript. Sin prueba de utilidad con usuarios. Consulta externa limitada según sección 6. |

## 3. Evidencia estática y contraste actuales

| Comprobación ejecutada | Resultado de la revisión verde | Alcance |
| --- | --- | --- |
| HTML, JavaScript y referencias locales | **4 HTML y 3 JavaScript; 0 errores** en la validación estática. | Existencia de archivos/anclas y sintaxis inspeccionada; no sustituye interacción en navegador. |
| Descripciones frente al ZIP | **9/9 idénticas carácter por carácter.** | Se conserva la descripción completa dentro de cada detalle. |
| Experiencia frente al ZIP | **14 piezas de texto presentes, ninguna ausente.** | Entidades, actividades y aportes preservados; investigación de 2025 y pasantía de 2023. |
| Biografía frente al ZIP | **Texto completo conservado.** | La revisión de contenido no implica una prueba de legibilidad. |
| Recursos | **14 imágenes originales conservadas** y un SVG botánico decorativo nuevo. | El resultado anterior de hashes se identifica como histórico; no se atribuye una nueva comparación SHA a esta fase sin ejecutarla. |
| Interacciones y adaptación | **Edge 155.0.4283.62: 116/116 comprobaciones correctas.** | [Registro verde](docs/resultado-validacion-verde.json) y capturas de la sección 4. Casos limitados al recorrido registrado. |

### Pares de colores de la nueva paleta

Valores calculados a partir de los tokens actuales de `estilos.css`, mediante luminancia relativa sRGB y la fórmula `(L más clara + 0,05) / (L más oscura + 0,05)`. Son pares opacos declarados, distintos de una auditoría de todos los fondos y estados efectivos.

| Uso | Colores | Ratio |
| --- | --- | --- |
| Texto principal / panel oscuro | `#F0F7F4` / `#111B30` | **15,79:1** |
| Texto secundario / tarjeta oscura | `#BECBD7` / `#1B2941` | **8,83:1** |
| Acento verde / tarjeta oscura | `#88EAB1` / `#1B2941` | **10,03:1** |
| Texto del botón / fondo verde | `#09271B` / `#55DF8E` | **9,36:1** |
| Texto de navegación / barra menta | `#163C29` / `#C5F1D3` | **9,87:1** |
| Página actual y foco / barra menta | `#0B5430` / `#C5F1D3` | **7,27:1** |
| Borde funcional / campo oscuro | `#718B85` / `#142036` | **4,45:1** |
| Foco / tarjeta oscura | `#A6F4C5` / `#1B2941` | **11,37:1** |
| Texto principal / panel claro | `#142F25` / `#F5FBF7` | **13,69:1** |
| Texto secundario / campo claro | `#405E51` / `#EAF6EE` | **6,44:1** |
| Acento verde / tarjeta clara | `#145C39` / `#E4F1E9` | **6,89:1** |
| Texto blanco / botón del tema claro | `#FFFFFF` / `#177443` | **5,81:1** |
| Borde funcional / campo claro | `#638672` / `#EAF6EE` | **3,65:1** |

Los pares de texto listados superan 4,5:1; los bordes y el foco listados superan 3:1. Los separadores decorativos usan `--line`; los campos usan `--control-border`. El fondo botánico es decorativo: el contenido se presenta sobre superficies de panel.

Referencias para interpretar los cálculos: [W3C: contraste mínimo de texto](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) y [W3C: contraste no textual](https://www.w3.org/WAI/WCAG22/understanding/non-text-contrast.html). Estos resultados **no certifican conformidad global** ni prueban contraste de cada elemento en ejecución.

## 4. Resultados de QA de la versión verde

La ejecución actual terminó con **116/116 comprobaciones correctas** en **Microsoft Edge 155.0.4283.62**. El [registro verde](docs/resultado-validacion-verde.json) contiene los casos, medidas, resultados y notas del entorno de automatización. Este resultado corresponde al diseño verde y al formulario integrado en Inicio.

| Grupo | Casos registrados | Resultado actual |
| --- | --- | --- |
| Composición y adaptación | Cuatro páginas a 320, 360, 390, 768, 1024 y 1440 px; orden y columnas de los seis paneles; cabecera a 881, 1024 y 1440 px | **Correcto:** 24/24 vistas sin desbordamiento horizontal ni imágenes rotas; seis paneles en dos columnas o una según el ancho y cabecera flotante correcta en los casos finales. |
| Navegación | Menú, foco en el primer enlace, Tab, Escape, botón, estado expandido y salto al contenido | **Correcto:** menú reversible, foco restaurado y salto con foco en `main`. |
| Proyectos | Filtros, detalles por puntero, enlace directo al cargar y cambio de ancla después de filtrar | **Correcto:** Java 3, Python 3, C#/.NET 2, OpenGL 2, Todos 9; el proyecto enlazado reaparece y abre su descripción. |
| Formularios de Inicio y Contacto | Vacíos, correo/celular inválidos, formatos local e internacional, primer error y valores conservados | **Correcto en ambos:** cuatro errores al validar vacío, foco en Nombre, detección de errores y aceptación de datos válidos conservando lo escrito. |
| Limpieza en ambos formularios | Confirmar, conservar, Escape, foco y solicitudes de red | **Correcto en ambos:** la confirmación enfoca la opción de conservar; cancelar/Escape conservan los valores y confirmar borra los datos y su validación. Validar/limpiar no genera solicitudes de red. |
| Tema y preferencias | Cambio claro/oscuro, persistencia, contraste básico y movimiento reducido | **Correcto:** preferencia persistente; ambos temas sin desbordamiento y con contraste básico de texto comprobado a 390/1440 px; movimiento reducido produce `scroll-behavior: auto`. |
| Sin JavaScript | Cuatro páginas, catálogo y ambos formularios | **Correcto:** contenido y navegación presentes, nueve proyectos visibles y acciones de ambos formularios ocultas/deshabilitadas. |
| Consola y red | Errores JavaScript, errores HTTP, solicitudes fallidas y solicitudes distintas de GET | **0 / 0 / 0 / 0** en el recorrido registrado. |

Las dimensiones son ventanas de Edge en escritorio; no dispositivos físicos. La apertura de detalles se probó con puntero y por enlace directo, sin una prueba específica de su activación por teclado. Tampoco se registró una prueba específica de los enlaces del resumen de errores. El zoom real al 200 %, lector de pantalla y comprensión con usuarios permanecen fuera del alcance ejecutado.

Capturas actuales: [Inicio completo en escritorio](docs/capturas-verde/inicio-escritorio.png), [hero de escritorio](docs/capturas-verde/inicio-escritorio-hero.png), [Inicio móvil](docs/capturas-verde/inicio-movil.png), [Inicio móvil completo](docs/capturas-verde/inicio-movil-completo.png), [Proyectos móvil](docs/capturas-verde/proyectos-movil.png) y [Contacto móvil](docs/capturas-verde/contacto-movil.png). Se guardan aparte de las capturas anteriores para conservar la trazabilidad.

## 5. Evidencia histórica de la versión anterior

**Resultado del 18 de octubre de 2026, anterior al cambio verde:** Microsoft Edge 155.0.4283.62 registró **94/94 comprobaciones correctas**, con 0 errores JavaScript, errores HTTP, solicitudes fallidas o solicitudes distintas de GET. Evidencia conservada: [resultado-validacion.json](docs/resultado-validacion.json).

Aquella matriz incluyó cuatro páginas y seis anchos —320, 360, 390, 768, 1024 y 1440 px— en oscuro: **24/24 vistas sin desbordamiento horizontal ni imágenes rotas**. También incluyó ambos temas a 390 y 1440 px, contraste básico de texto, menú, filtros, anclas, validación y limpieza del formulario de Contacto, movimiento reducido y navegación sin JavaScript. La portada de esa versión no tenía el formulario integrado actual.

La comprobación histórica registró las catorce imágenes con SHA idéntico al ZIP, nueve descripciones originales y biografía preservadas. El servidor local documentado respondió 200 para los recursos probados, 404 para un recurso inexistente, 403 para `.git` y 405 para POST. Estos casos se documentan como pruebas anteriores, no como una nueva ejecución.

Capturas históricas: [Inicio escritorio](docs/capturas/inicio-escritorio.png), [Inicio móvil](docs/capturas/inicio-movil.png), [Proyectos móvil](docs/capturas/proyectos-movil.png) y [Contacto móvil](docs/capturas/contacto-movil.png). Las maquetas de [Análisis y propuesta](docs/ANALISIS_Y_PROPUESTA.md) documentan decisiones anteriores; no representan automáticamente el estado verde actual.

## 6. Límites y asuntos abiertos

- **Los formularios solo validan.** Lo explican antes de escribir y después de validar. No hay backend, envío, almacenamiento de mensajes ni correo de destino confirmado. No se simula un envío exitoso.
- **WhatsApp conserva `593999999999`**, como en la fuente. Titularidad y funcionamiento siguen sin confirmar. No se inventó un reemplazo ni se enviaron mensajes.
- **Consulta externa histórica limitada:** la herramienta web recuperó el [perfil de GitHub](https://github.com/fernygeek) y el [DOI](https://doi.org/10.13140/RG.2.2.10598.74561) resolvió a ResearchGate. LinkedIn y WhatsApp no pudieron recuperarse por errores internos/de caché de la herramienta; eso no demuestra que estén rotos. No se realizó una nueva comprobación externa para la revisión verde. Recuperar una página no garantiza su disponibilidad permanente.
- **No se probó con lector de pantalla ni con personas usuarias.** La semántica y las relaciones ARIA inspeccionadas no demuestran por sí solas su anuncio correcto ni la comprensión de los textos.
- **No se probó zoom real al 200 %, otros navegadores ni equipos móviles físicos.** Redimensionar una ventana de escritorio no sustituye esas pruebas.
- **No es una auditoría completa de WCAG 2.2.** Los cálculos de contraste, la revisión heurística y las pruebas concretas tienen el alcance declarado.
- **El sitio sigue siendo local.** No se evaluó un despliegue público, un dominio ni la configuración de producción.

## 7. Referencias y documentación

- [Nielsen Norman Group: diez heurísticas de usabilidad](https://www.nngroup.com/articles/ten-usability-heuristics/).
- [W3C: contraste mínimo de texto](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) y [contraste no textual](https://www.w3.org/WAI/WCAG22/understanding/non-text-contrast.html).
- [README](README.md): versión visual vigente, estructura y ejecución local.
- [Diseño verde](docs/DISENO_VERDE.md): composición, paleta y decisiones de la revisión actual.
- [Análisis y propuesta](docs/ANALISIS_Y_PROPUESTA.md): inventario original y trazabilidad de las decisiones previas.

Las referencias bibliográficas son las ya consignadas durante el análisis. Las conclusiones de la implementación se sustentan en archivos locales y resultados identificados por versión.
