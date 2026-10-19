# Análisis y propuesta de rediseño

**Documento histórico:** el análisis de la fuente y la elección inicial se conservan aquí. La solicitud posterior del 19 de octubre de 2026 cambió el estilo y la distribución; el diseño vigente se documenta en [DISENO_VERDE.md](DISENO_VERDE.md) y sus pruebas en [EVALUACION_HEURISTICAS.md](../EVALUACION_HEURISTICAS.md).

Fecha de análisis: 18 de octubre de 2026. Estado: **propuesta anterior aprobada para desarrollo e implementada localmente**. Las comprobaciones finales se registran en [EVALUACION_HEURISTICAS.md](../EVALUACION_HEURISTICAS.md).

Decisión de la usuaria: «desarrollemos la propuesta anterior». Se implementó la composición en negro y naranja con navegación superior, nombre grande a la izquierda y retrato a la derecha. La alternativa con perfil lateral se conserva como documentación de diseño.

La propuesta desarrolla una nueva alternativa para el portafolio de Fernanda Rueda, dentro de la actividad académica descrita.

## 1. Alcance de la revisión

El workspace `Portafolio-personal-v2` contenía únicamente un `README.md` y metadatos Git. La fuente del análisis es `C:\Users\Ferny\Desktop\Mi-Web-Personal-main.zip`, inspeccionada directamente sin modificar el archivo ni el portafolio original. Se revisaron los 21 archivos del ZIP, sus rutas, contenido de código y recursos gráficos. Las referencias de archivo y línea que siguen corresponden a las entradas dentro del ZIP.

La [propuesta elegida](PROPUESTA_VISUAL_ANTERIOR.png) guio la implementación. La [alternativa con perfil lateral](PROPUESTA_VISUAL.png) se conserva para comparación. Ambas imágenes son maquetas conceptuales. Las capturas del sitio implementado se guardan por separado en `docs/capturas/`.

## 2. Tecnologías y estructura existentes

| Elemento | Tecnología y función |
| --- | --- |
| `index.html` | HTML5: presentación, habilidades, accesos a secciones y biografía. |
| `2_experienciaLaboral.html` | HTML5: pasantía e investigación, presentadas en una línea temporal. |
| `3_portafolio.html` | HTML5: nueve proyectos con imágenes y desplegables nativos `details`/`summary`. |
| `4_contactame.html` | HTML5: canales de contacto y formulario; validación mediante JavaScript integrado. |
| `estilos.css` | CSS nativo: variables, Flexbox, Grid, temas claro/oscuro, estados de foco y media queries. |
| `tema.js` | JavaScript nativo: preferencia de tema del sistema, cambio manual y persistencia en `localStorage`. |
| `img/` | Catorce recursos: retrato, diez imágenes de proyectos y tres iconos de redes/publicación. |
| `README.md` | Descripción breve del sitio. |

No hay React, Vite, TypeScript, Tailwind, Bootstrap, gestor de paquetes, librerías externas del sitio, proceso de compilación, servidor de aplicación ni pruebas automatizadas configuradas. Las tecnologías mencionadas en las descripciones de proyectos pertenecen a esos proyectos, no a la implementación del portafolio.

**Decisión recomendada:** conservar HTML, CSS y JavaScript nativos. Las páginas y las interacciones previstas no requieren un framework. Esta elección permite reutilizar todos los recursos, conservar las rutas actuales, evitar instalación de dependencias y publicar posteriormente como sitio estático. El rediseño usará estructura semántica, variables de diseño, clases compartidas y JavaScript pequeño para las mejoras de interacción. No se propone migración tecnológica sin una necesidad funcional que la justifique.

## 3. Inventario de contenido que se conservará

### Perfil y formación

- **Fernanda Rueda**, estudiante de Ingeniería de Software en la **Escuela Politécnica Nacional**.
- Presentación: «Desarrollo de software, análisis de datos y aprendizaje continuo».
- Biografía original completa: intereses, aprendizaje, perseverancia, entusiasmo y compromiso con su formación profesional y desarrollo personal.
- Habilidades ya visibles: Java, Python, C#, .NET y MySQL. Las tecnologías adicionales se mostrarán únicamente donde estén sustentadas por las descripciones de proyectos.
- Fotografía original: `img/fotoPerfil.jpg`.

No constan correo personal, CV, certificaciones, semestre, fecha de graduación, ciudad de residencia, disponibilidad laboral, nivel numérico de habilidades ni métricas de resultados. No se agregarán esos datos.

### Experiencia

| Registro original | Contenido que se conservará |
| --- | --- |
| Pasante, 2023 — Agencia de Regulación y Control de Energía y Recursos Naturales no Renovables | Revisión y validación de información de distribuidoras; análisis de mediciones de energía y demanda; datos de consumidores regulados con SGDA. |
| Participación en investigación, 2025 — Glaciar Antisana 15 | Modelos predictivos del retroceso glaciar, variables climáticas, Random Forest y K-Nearest Neighbors; aprendizajes en datos, modelado y resolución de problemas; enlace a la investigación. |

La participación en investigación seguirá identificada como tal. Se propone ordenar los registros del más reciente al más antiguo, conservando fechas, entidades y actividades.

### Proyectos

Se conservarán las descripciones completas originales, las nueve anclas y todas sus imágenes. Los textos breves de entrada solo resumirán información ya presente; el detalle mantendrá la descripción completa.

| Proyecto / ancla actual | Tecnologías explícitas y contenido | Imágenes |
| --- | --- | --- |
| Proyecto de Investigación en Machine Learning aplicado a Glaciares / `glaciares` | Participación en investigación sobre el Antisana 15; Python, KNN, Random Forest, datos climáticos e índices oceánicos. | `antisana1.png`, `antisana2.png` |
| iPets / `ipets` | SIGACCEM-PetGlow para iPets Shop; clientes, mascotas, citas e inventario; C# y .NET. | `ipets.png` |
| Problema del Agente Viajero / `agente-viajero` | TSP, grafos, backtracking y ramificación y poda; Java, Swing y mapas basados en OpenStreetMap. | `agenteViajero.png` |
| Sistema de Gestión de Ayudantes de Investigación / `ayudantes` | Seguimiento de estudiantes en proyectos académicos; MVC, Java, JavaFX, JPA/Hibernate y MySQL. | `sistemaAyudantes.png` |
| ElectroStock IA / `electrostock` | Inventarios de PYMES ecuatorianas; Python, LLM local con Ollama, FastAPI, ToolCallingAgent y SQL Server. | `agenteIA.png` |
| Tienda Maruja / `tienda-maruja` | Base de datos distribuida, fragmentación y replicación, CRUD, ventas e inventario; C# y .NET. No se especifica motor de base de datos. | `tiendaMaruja.png` |
| Realidad Aumentada / `realidad-aumentada` | Marcadores ArUco y modelo 3D; Python, OpenCV y OpenGL. | `realidadAumentada.png` |
| Dron Simulator / `dron` | OpenGL, texturas, materiales, iluminación y modelos 3D. No se especifica lenguaje. | `dronSimulator.png` |
| Polinvaders / `polinvaders` | Videojuego basado en Space Invaders; Java, arquitectura en capas, POO e interacción en tiempo real. | `polinvaders.png` |

### Recursos gráficos

| Archivo | Dimensiones |
| --- | --- |
| `fotoPerfil.jpg` | 1095 × 1600 |
| `antisana1.png` | 1126 × 542 |
| `antisana2.png` | 924 × 631 |
| `ipets.png` | 987 × 664 |
| `agenteViajero.png` | 790 × 532 |
| `sistemaAyudantes.png` | 920 × 435 |
| `agenteIA.png` | 1563 × 728 |
| `tiendaMaruja.png` | 1044 × 684 |
| `realidadAumentada.png` | 1180 × 455 |
| `dronSimulator.png` | 1321 × 773 |
| `polinvaders.png` | 827 × 764 |
| `githubIcon.png` | 512 × 512 |
| `linkedinIcon.png` | 256 × 256 |
| `researchGateIcon.png` | 450 × 141 |

Los tres iconos están disponibles, aunque el HTML actual usa iconos SVG integrados. Se conservarán los archivos. Las capturas de proyectos se mostrarán sin recortar información; el retrato podrá ajustarse al marco de presentación manteniendo su archivo original.

### Enlaces y contacto

| Destino existente | Observación |
| --- | --- |
| [GitHub](https://github.com/fernygeek) | Perfil general; no hay enlaces individuales de repositorios en las tarjetas. |
| [LinkedIn](https://www.linkedin.com/in/ruth-fernanda-rueda) | Canal profesional existente. |
| [Investigación](https://doi.org/10.13140/RG.2.2.10598.74561) | Está en Experiencia; se propone hacerlo accesible también desde el proyecto Glaciares. |
| [WhatsApp](https://wa.me/593999999999) | El número +593 99 999 9999 parece provisional. Su titularidad y operación no están confirmadas; no se sustituirá por un número inventado. |

`ejemplo@gmail.com` es un placeholder del formulario, no un correo de Fernanda. No se creará un enlace de correo a partir de ese valor. Los destinos externos se inventariaron; no se verificó su disponibilidad ni se enviaron mensajes.

## 4. Evaluación inicial de usabilidad

La revisión combina evidencia de código con inspección de las imágenes. No equivale a una prueba con usuarios ni a una certificación de accesibilidad.

### Aspectos que conviene conservar

- Navegación consistente, página actual con `aria-current`, idioma español y landmarks semánticos.
- Etiquetas de campos, autocompletado, estado del formulario mediante `role="status"` y `aria-live`.
- Desplegables nativos, foco visible, carga diferida de capturas y adaptación de columnas mediante media queries.
- Preferencia de tema persistente y respeto a `prefers-reduced-motion`.

### Problemas y oportunidades

| Prioridad | Hallazgo y evidencia en el ZIP | Efecto / propuesta |
| --- | --- | --- |
| Alta | `4_contactame.html:32` invita a enviar un mensaje; `:57–69` cancela el envío y solo valida. No hay destino de envío. | La finalidad se explica demasiado tarde. Mantener la validación con su alcance visible antes de escribir y dar protagonismo a los canales de contacto existentes. |
| Alta, por confirmar | `index.html:13` y `4_contactame.html:20` usan `593999999999`. | Confirmar el dato antes de considerar verificado ese canal. No afirmar que está roto ni reemplazarlo sin información. |
| Media | `4_contactame.html:40–41` exige celular con patrón `09[0-9]{8}` sin explicar previamente país y formato. `:62` muestra ayuda genérica. | Añadir ejemplo y mensaje junto al campo; conservar los datos escritos y enfocar el primer error. |
| Media | `4_contactame.html:46` contiene un `reset` inmediato, sin recuperación. | Conservar el control con confirmación cuando haya texto, o implementar deshacer. No borrar el contenido por accidente. |
| Media | `3_portafolio.html:18–127` presenta nueve tarjetas equivalentes; el detalle repite la descripción y no ofrece destinos de repositorio o demo. | Crear una jerarquía de lectura con capturas grandes y detalles identificables. Reutilizar únicamente el enlace de investigación disponible; no inventar repositorios ni demostraciones. |
| Media | Bordes de campos: `#52647c` sobre `#111e30` = **2,77:1**; `#8b9fb1` sobre `#f7fafc` = **2,60:1**. Tokens en `estilos.css:127–128` y `:155–156`. | Reforzar los límites y revisar los estados de los campos en navegador. Son cálculos sobre colores declarados; no una evaluación visual completa. |
| Baja | Textos alternativos genéricos y «Hetmap» en `3_portafolio.html:20,27`. | Describir el mapa de ubicación del Antisana y la matriz de correlaciones según la imagen real. |
| Baja | Los cuatro HTML no incluyen acceso para saltar directamente al contenido. | Añadir «Saltar al contenido», visible al enfocar, para recorrer menos controles con teclado. |
| Mantenimiento | Encabezado/pie repetidos en cuatro páginas y primeras reglas CSS muy comprimidas. | Ordenar estilos y reutilizar patrones; mantener la navegación disponible sin depender de JavaScript. |

No se ha observado todavía el comportamiento del sitio en navegador. Por tanto, no se afirman desbordamientos, funcionamiento táctil, lectura correcta con tecnologías de asistencia o conformidad global.

## 5. Propuesta elegida: presentación editorial · negro y naranja

La composición elegida presenta una cabecera horizontal y una portada en dos columnas: nombre y perfil a la izquierda, retrato rectangular con marco naranja desplazado a la derecha. Los proyectos se presentan después como casos de diferentes proporciones, con capturas originales sin recortar su contenido. Se mantienen el fondo casi negro, las superficies oscuras, el naranja intenso y el texto blanco aprobados.

### Identidad y paleta

| Uso | Color |
| --- | --- |
| Fondo principal casi negro | `#0D0D0D` |
| Cabecera negra | `#000000` |
| Paneles y formulario | `#151515` |
| Texto principal blanco suave | `#F5F5F5` |
| Texto secundario gris claro | `#C5C5C5` |
| Acciones, enlaces y acentos naranja | `#FF6A00` |
| Líneas decorativas | `#353535` |
| Bordes funcionales propuestos | `#858585` |

Las líneas suaves sirven como separación decorativa, no como única señal de un campo o estado. El estado activo combinará texto, forma/subrayado y color. Los marcos y el foco usarán naranja, con brillos discretos inspirados en la referencia. Las fotografías y capturas conservarán sus colores originales.

Contrastes calculados de la propuesta: blanco suave/fondo negro **17,83:1**, gris claro/panel **10,58:1**, naranja/fondo negro **6,77:1** y naranja/panel **6,36:1**. Los botones naranjas llevarán texto casi negro, que da **6,77:1**; blanco sobre ese naranja da **2,87:1** y no se propone para el texto de esos botones. El borde funcional `#858585` sobre el panel da **4,95:1**. Son cálculos de pares de colores, pendientes de verificar en los componentes implementados.

El tema inicial es oscuro. El selector de tema está en la cabecera; su variante clara usa blancos, grises y naranja más oscuro para conservar contraste. La preferencia se mantiene entre páginas mediante `localStorage` y no almacena datos del formulario.

### Tipografía y composición

- Titulares: **Georgia**, con alternativas serif del sistema; nombre grande y jerarquía entre secciones y proyectos.
- Cuerpo, navegación y formularios: **Segoe UI**, con alternativas del sistema.
- Metadatos: **Consolas**, con alternativa monoespaciada, solo para tecnologías y numeración.
- Cuerpo de 17–18 px, interlineado cercano a 1,6 y ancho de lectura aproximado de 65–75 caracteres.
- Nombre de 76–112 px en escritorio y tamaño fluido en móvil; títulos de sección de aproximadamente 30–46 px.
- Casos de proyecto en filas con capturas y texto. Las imágenes conservan su proporción y su interfaz original.

### Nueva organización

Se mantienen las cuatro páginas y sus URL. La portada implementada distribuye los elementos de esta manera:

1. **Cabecera horizontal:** nombre enlazado al inicio, navegación principal y selector de tema. En móvil, menú desplegable identificado por texto.
2. **Presentación amplia:** nombre, perfil profesional, descripción y acciones «Ver proyectos» y «Contacto»; retrato original a la derecha en escritorio.
3. **Proyectos seleccionados:** un caso principal de Antisana 15 y una fila secundaria de iPets; enlace «Ver los 9 proyectos» al catálogo completo.
4. **Sobre mí y habilidades:** biografía completa acompañada de Java, Python, C#, .NET y MySQL, sin porcentajes inventados.
5. **Experiencia:** filas de investigación de 2025 y pasantía de 2023; enlaces directos a la información completa.
6. **Contacto:** invitación final, canales existentes y acceso al formulario desde la cabecera y las acciones de la portada.

| Elemento | Propuesta elegida e implementada | Alternativa conservada |
| --- | --- | --- |
| Navegación de escritorio | Cabecera horizontal | Columna lateral vertical |
| Nombre y retrato | Nombre muy grande a la izquierda y retrato grande a la derecha | Perfil compacto con nombre y retrato juntos en la columna lateral |
| Introducción | Ocupa la mayor parte de la primera vista | Franja breve antes de la galería |
| Proyectos | Filas bajo la presentación | Galería de proporciones diferentes como protagonista del área principal |
| Habilidades | Integradas después de la biografía | Banda propia inmediatamente después de los proyectos |
| Biografía y experiencia | Secciones sucesivas | Bloques paralelos en escritorio y consecutivos en móvil |

La página Proyectos usa la misma cabecera horizontal y desarrolla nueve casos en filas con capturas, resumen breve y descripción original completa desplegable. Los filtros por Java, Python, C#/.NET y OpenGL se basan únicamente en tecnologías descritas; «Todos» recupera el catálogo completo. Se mantienen las nueve anclas originales para enlaces directos. El orden visual coincide con el orden de lectura y de navegación con teclado.

El desplegable identificará el proyecto en su nombre accesible. Una captura podrá ampliarse mediante un enlace al archivo original; volver con el navegador recuperará el recorrido. No hace falta introducir carruseles ni una navegación compleja para acceder a las imágenes.

### Contacto honesto y útil

Se conservarán canales, campos y validación, con una aclaración antes de los campos: el formulario comprueba los datos; para conversar se utilizan los canales disponibles. Los mensajes distinguirán «validado» de «enviado». No se mostrará un envío exitoso inexistente.

Un envío real necesitaría un destino confirmado e integración adicional. No se inventará correo, se contratará un servicio ni se conectará una cuenta para resolverlo. El rediseño visual y las mejoras de validación pueden avanzar sin esa integración.

### Interacción, móvil y accesibilidad

- Escritorio: cabecera horizontal, presentación en dos columnas y proyectos con imagen y texto.
- Tablet: menú compacto y columnas que se adaptan al ancho disponible.
- Móvil: nombre y perfil, acciones y retrato apilados; proyectos, biografía, habilidades, experiencia y contacto en una columna.
- Se mantendrá un único H1 y una jerarquía de secciones consistente. El orden visual, de lectura y de tabulación coincidirá.
- La navegación se adapta a pantallas estrechas y al zoom; los resultados de las comprobaciones se registran en el documento de evaluación.
- El menú se cerrará desde su botón, con Escape y tras elegir un destino; expondrá `aria-expanded` y no ocultará enlaces cuando JavaScript no esté disponible.
- Foco visible, orden lógico de tabulación, «Saltar al contenido», etiquetas asociadas y errores junto al campo.
- Objetivo de tamaño de controles: 44 × 44 px o mayor cuando corresponda; la información nunca dependerá solo del hover o del color.
- Animaciones breves de 150–250 ms para estados; sin ocultar contenido a la espera de animarse y respetando movimiento reducido.
- Objetivo de accesibilidad: WCAG 2.2 AA, sujeto a verificación real. El contraste mínimo del texto normal se comprobará contra 4,5:1 y los indicadores visuales necesarios de controles/estados contra 3:1. Referencias: [W3C, contraste de texto](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) y [W3C, contraste no textual](https://www.w3.org/WAI/WCAG22/understanding/non-text-contrast.html).

## 6. Aplicación prevista de las diez heurísticas

La referencia metodológica es [Jakob Nielsen, 10 Usability Heuristics for User Interface Design, Nielsen Norman Group](https://www.nngroup.com/articles/ten-usability-heuristics/). La matriz siguiente conserva la planificación de diseño; sus resultados finales se encuentran en el documento de evaluación.

| Heurística | Aplicación en esta propuesta | Verificación prevista |
| --- | --- | --- |
| 1. Visibilidad del estado | Página actual, tema y filtros con estado; resultado de validación explícito. | Comprobar estados visuales y atributos accesibles al interactuar. |
| 2. Correspondencia con el mundo real | Etiquetas «Proyectos», «Experiencia», «Contacto» y ayuda de formato de celular. | Revisar textos y recorrer una tarea de contacto sin asumir conocimientos técnicos. |
| 3. Control y libertad | Menú reversible, enlaces al inicio, desplegables cerrables y protección al limpiar. | Abrir/cerrar con teclado, cancelar el borrado y volver de una imagen ampliada. |
| 4. Consistencia y estándares | Mismos estilos y navegación en cuatro páginas; enlaces y botones con funciones claras. | Comparar componentes y estados en todas las páginas. |
| 5. Prevención de errores | Instrucciones antes de escribir, validación contextual y revisión de rutas/datos. | Probar datos vacíos e inválidos; revisar enlaces y confirmar el número de contacto. |
| 6. Reconocimiento antes que recuerdo | Navegación identificada por texto; nombre, imagen y tecnologías identifican cada proyecto. | Localizar un proyecto y sus detalles sin recordar rutas o iconos. |
| 7. Flexibilidad y eficiencia | Acceso directo a proyectos, anclas preservadas, salto al contenido y navegación por tecnologías. | Recorrer con Tab/Enter y recuperar «Todos» tras filtrar. |
| 8. Diseño estético y minimalista | Presentación editorial, capturas legibles y descripciones completas bajo demanda. | Revisar proporciones, lectura y conservación de todo el contenido en varios anchos. |
| 9. Recuperación de errores | Error específico por campo, foco al primero inválido y datos conservados. | Corregir un dato sin reescribir el resto; comprobar explicación y asociación del mensaje. |
| 10. Ayuda y documentación | Alcance del formulario visible, contacto accesible e instrucciones junto a los controles. | Verificar que el visitante entiende cómo contactar y qué hace cada acción. |

La matriz anterior recoge la planificación inicial. La evidencia final y los estados de implementación y verificación se registran en [EVALUACION_HEURISTICAS.md](../EVALUACION_HEURISTICAS.md).

## 7. Comprobaciones de la fase inicial de análisis

| Comprobación | Resultado real en esta fase |
| --- | --- |
| Inventario de carpetas y archivos del ZIP | Completado: 21 archivos, 2 entradas de directorio. |
| Lectura de HTML, CSS, JS y README | Completada. |
| Referencias locales `href`/`src` | Se comprobaron 48 referencias; no se encontraron archivos o anclas faltantes. |
| Recursos gráficos | Las 14 imágenes se decodificaron; se inspeccionó su hoja de contacto. |
| Colores declarados y propuesta | Ratios calculados, con los límites explicados arriba. |
| Suite de pruebas del proyecto | No existe configuración en la fuente. |
| Sitio original o rediseño en navegador | No ejecutado en esta fase. |
| Responsive, zoom y teclado | Pendientes de implementación y comprobación real. Los media queries actuales sí se inspeccionaron. |
| Lectores de pantalla y envío de mensajes | No probados. El código confirma que el formulario actual no envía. |
| Disponibilidad/titularidad de enlaces externos | No verificada; no se contactó a terceros. |

La implementación se preparó en este workspace, manteniendo el ZIP como fuente intacta. El alcance y los resultados reales de validación se documentan en `EVALUACION_HEURISTICAS.md`. La tabla anterior refleja exclusivamente lo comprobado durante el análisis previo al desarrollo.

No se realizarán commits ni publicación automática.

## 8. Decisión de desarrollo

La usuaria aprobó desarrollar la **propuesta anterior en negro y naranja**, con cabecera superior y retrato a la derecha. Esa instrucción autorizó la implementación local sin otra ronda de aprobación. La alternativa lateral permanece documentada.

El número de WhatsApp continúa conservado tal como figura en la fuente, pendiente de confirmar su titularidad y funcionamiento. No se sustituyó por información inventada.
