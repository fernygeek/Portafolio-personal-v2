# Diseño actual: paneles y acentos verdes

Revisión: **19 de octubre de 2026**. Implementación local solicitada a partir de la nueva imagen de referencia. Sustituye la presentación editorial negra y naranja; las maquetas y pruebas de esa versión se conservan como historial.

## Composición aplicada

La portada sigue la estructura de la referencia: un bloque principal amplio y redondeado, navegación flotante, presentación a la izquierda, fotografía a la derecha y una cinta de tecnologías al pie. Debajo aparecen seis paneles en dos columnas:

| Fila | Columna izquierda | Columna derecha |
| --- | --- | --- |
| 1 | Sobre mí, con biografía completa | Experiencia: investigación de 2025 y pasantía de 2023 |
| 2 | Formación en Ingeniería de Software | Selección de seis proyectos con acceso al catálogo de nueve |
| 3 | Habilidades sustentadas por los proyectos | Contacto, canales directos y formulario de validación |

En tablet y móvil, los paneles pasan a una columna manteniendo el mismo orden de lectura. La navegación se convierte en un menú identificado por texto; conserva foco visible, apertura por teclado y cierre con Escape. El catálogo mantiene sus nueve anclas y descripciones originales, ahora presentadas como tarjetas.

## Identidad visual

| Uso | Color principal |
| --- | --- |
| Fondo exterior verde claro | `#DFF3E7` |
| Bloque principal azul de medianoche | `#10182B` |
| Paneles | `#111B30` |
| Tarjetas interiores | `#1B2941` |
| Navegación verde menta | `#C5F1D3` |
| Titulares y acentos verdes | `#88EAB1` |
| Botones principales | `#55DF8E` con texto `#09271B` |
| Texto principal y secundario | `#F0F7F4` / `#BECBD7` |

Los titulares usan Consolas y alternativas monoespaciadas del sistema, y los textos Segoe UI y alternativas sans serif. Los paneles, botones y tarjetas tienen esquinas redondeadas. La decoración de hojas del fondo es un SVG local, `img/botanica.svg`; no requiere descargas ni nuevas dependencias.

El retrato original se mantiene en un marco con arco y halo verde. Las imágenes de proyectos conservan sus colores y se muestran completas. El modo claro mantiene la identidad verde, con superficies claras y acentos más oscuros para el contraste.

## Adaptación al contenido real

La sección de certificaciones de la referencia se sustituye por la experiencia que sí consta en el proyecto. Formación indica estudios **en curso** en la Escuela Politécnica Nacional. No se añaden títulos obtenidos, certificados, CV, métricas de habilidad ni experiencias ausentes de la fuente.

La biografía, los nueve proyectos con sus descripciones completas, las dos experiencias y los catorce archivos de imagen originales se conservan. La banda de tecnologías y las habilidades se basan en Java, Python, C#, .NET y MySQL ya presentes.

## Contacto y validación

La portada integra el mismo formulario que la página Contacto, con nombre, correo, celular y mensaje. Hay un único formulario por documento. Los canales directos están antes de los campos; el aviso explica que el formulario **comprueba datos y no envía mensajes**. Los errores se asocian con cada campo y limpiar requiere confirmación si hay datos escritos.

El número de WhatsApp se conserva desde la fuente y continúa pendiente de confirmar. No se configuró un destino de envío ni se inventó un correo.

La evidencia de esta revisión se registra en [EVALUACION_HEURISTICAS.md](../EVALUACION_HEURISTICAS.md), el informe `docs/resultado-validacion-verde.json` y `docs/capturas-verde/`. El informe `docs/resultado-validacion.json` y `docs/capturas/` corresponden a la versión anterior y no acreditan esta revisión.
