# Evaluación UX de la distribución de pantalla completa

Revisión: 19 de octubre de 2026. HTML, CSS y JavaScript nativos. La evaluación anterior se conserva en [el archivo histórico](docs/EVALUACION_HEURISTICAS_ANTERIOR.md).

## Mejoras UX/UI

Inicio contiene presentación, habilidades y biografía, en ese orden. El fondo azul oscuro ocupa la ventana completa, sin hojas ni marco exterior. El espaciado interno conserva una lectura cómoda. El cuerpo usa 18 px en escritorio y 16 px en móvil; los títulos de sección escalan de 32 a 48 px y el menú usa 16 px.

La cabecera menta sticky muestra PORTAFOLIO, seis opciones de navegación, tema y Hablemos. Formación permanece accesible desde Sobre mí. Los logos de contacto son SVG con fondo transparente y color verde adaptado al tema. Las anclas permanecen en Inicio. El espacio para desplazar los títulos depende de la altura real del encabezado. La sección activa se actualiza incluso al llegar al final de página. Las rutas anteriores siguen funcionando sin duplicar la biografía completa.

Las tecnologías proceden de proyectos existentes: Java (agente viajero, ayudantes y Polinvaders), Python (glaciares, ElectroStock y realidad aumentada), C# y .NET (iPets y tienda), MySQL e Hibernate (ayudantes), OpenCV (realidad aumentada), OpenGL (realidad aumentada y dron), FastAPI y SQL Server (ElectroStock). Cada tarjeta enlaza a un proyecto concreto. Los SVG se sirven localmente con sus licencias y fondo neutro para reconocer las marcas en ambos temas. No se inventaron porcentajes de dominio ni experiencia profesional.

La secuencia visual de experiencia es 2023 → 2025. Se conserva íntegro el contenido de ambos artículos y de los nueve proyectos. La validación del formulario no se modificó.

## Diez heurísticas

| Heurística | Aplicación |
| --- | --- |
| 1. Visibilidad del estado | Página/sección activa con aria-current; tema, filtros y resultados del formulario. |
| 2. Correspondencia con el mundo real | Nombres claros, logos reconocibles, fechas ascendentes y formación en curso. |
| 3. Control y libertad | Menú persistente, regreso arriba, Escape y cancelación del borrado. |
| 4. Consistencia | Cabecera, tipografía, botones, foco, espaciado y colores compartidos. |
| 5. Prevención de errores | Enlaces y anclas comprobados, etiquetas, validación y confirmación antes de limpiar. |
| 6. Reconocimiento antes que recuerdo | Logos con nombres de tecnologías; contexto y nombres accesibles en contacto. |
| 7. Flexibilidad y eficiencia | Anclas, tarjetas hacia proyectos concretos, filtros, teclado y salto al contenido. |
| 8. Estética y minimalismo | Tres secciones ordenadas, fondo continuo sin hojas y jerarquía legible. |
| 9. Recuperación de errores | Mensajes por campo, resumen enlazado, conservación de datos y restauración del foco. |
| 10. Ayuda | Contexto de tecnologías, ejemplos de celular y explicación previa del alcance del formulario. |

## Pruebas realizadas

- Validación estática: siete HTML y tres JavaScript, sin errores ni advertencias; referencias locales y fragmentos válidos.
- Edge 155 headless: **47/47 comprobaciones funcionales**. Cinco páginas a 375, 768 y 1440 px sin desbordamiento ni imágenes rotas; orden de secciones, anclas visibles bajo cabecera y navegación activa; menú con foco y Escape; experiencia ascendente; filtros (3 Java, 3 Python, 2 .NET, 2 OpenGL, 9 total); logos de contacto; errores, teléfonos locales/internacionales y limpieza del formulario; temas persistentes, movimiento reducido y rutas antiguas. Navegación disponible sin JavaScript. Sin excepciones JavaScript ni respuestas HTTP fallidas durante la prueba.
- Teclado: primer Tab muestra «Saltar al contenido» con foco visible; Enter enfoca el elemento principal. Escape del menú devuelve foco al botón.
- Contraste: **22 combinaciones texto/fondo** de tokens en ambos temas alcanzan al menos **5,81:1**, por encima de la referencia AA de 4,5:1 para texto normal. No certifica toda la interfaz ni evalúa los colores de marca de los logos.
- Conservación frente a Git HEAD: dos artículos de experiencia y nueve detalles de proyectos idénticos, biografía completa, contacto.js intacto y catorce imágenes iguales byte a byte.
- No corresponde compilar ni instalar dependencias. Configuración de GitHub Pages sin cambios; sin commits ni push.

Evidencias: [funcionalidad](docs/resultado-validacion-ux.json), [contraste y teclado](docs/contraste-y-teclado-ux.json), [contenido](docs/conservacion-contenidos-ux.json), [capturas](docs/capturas-ux/). Los scripts reproducibles y sus instrucciones figuran en README.

## Límites

La automatización y las capturas no sustituyen pruebas con usuarios. No se probaron lectores de pantalla, dispositivos físicos ni zoom real al 200 %. No se verificaron perfiles externos ni se enviaron mensajes. El número original de WhatsApp se conserva sin confirmar su titularidad. Esta revisión es local; los cambios todavía requieren publicación autorizada para aparecer en GitHub Pages.
