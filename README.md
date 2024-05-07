## README ID3 - Procesamiento de Hojas de estilo

### Descripción del Proyecto

Este proyecto utiliza un stack de tecnologías orientado al procesamiento de hojas de estilo CSS para asegurar la compatibilidad entre diferentes navegadores y mejorar la escritura de estilos mediante la automatización de tareas comunes como la adición de prefijos automáticos y la optimización de los archivos CSS.

### Stack Tecnológico

- **Node.js**: Entorno de ejecución para JavaScript en el servidor, necesario para utilizar las herramientas de desarrollo.
- **Gulp**: Automatizador de tareas que nos permite ejecutar diversas operaciones sobre los archivos CSS de forma automática.
- **PostCSS**: Herramienta para transformar estilos CSS con plugins de JavaScript. En este proyecto se usa principalmente para autoprefijar y optimizar el CSS.
- **Autoprefixer**: Plugin de PostCSS que añade prefijos específicos de cada navegador a las reglas CSS, basándose en la información de compatibilidad de los navegadores.

### Comandos del Proyecto

- `npm run build`: Ejecuta la tarea de Gulp que procesa los archivos CSS mediante PostCSS y Autoprefixer, y coloca el resultado en la carpeta `./css/newcss/`.
- `npm run watch`: Observa cambios en los archivos CSS y automáticamente ejecuta la tarea de build cuando detecta una modificación.

### Instalación

Para utilizar este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio:**

git clone "url_del_repositorio"


2. **Instalar Node.js:**
Asegúrate de tener Node.js instalado en tu sistema. Si no lo tienes, puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/).

3. **Instalar las dependencias:**
Navega hasta la carpeta del proyecto y ejecuta el siguiente comando en la terminal:


4. **Ejecutar comandos:**
Utiliza `npm run build` para procesar tus archivos CSS por primera vez y `npm run watch` para que Gulp observe los cambios.

### Problemas Conocidos y Estado Actual

Actualmente, el proyecto se encuentra en desarrollo y se han identificado problemas con algunos prefijos específicos que Autoprefixer procesa, lo que podría no aplicar correctamente las reglas CSS en todos los navegadores especificados en `browserslist`.

### Conceptos Clave

- **CSS (Cascading Style Sheets)**: Lenguaje utilizado para describir la presentación de un documento escrito en HTML o XML. CSS describe cómo debe ser renderizado el elemento en pantalla, en papel, en voz o en otras interfaces.
- **Prefijos de Navegadores**: Son prefijos específicos que se añaden a las CSS propiedades y métodos para asegurar la compatibilidad entre diferentes navegadores. Ejemplos incluyen `-webkit-`, `-moz-`, `-ms-`, etc.
- **Gulp**: Herramienta que nos permite automatizar tareas repetitivas y comunes en el desarrollo de software como minificar archivos, compilar preprocesadores de CSS, entre otros.
- **PostCSS**: Es un procesador de CSS que utiliza plugins para extender sus funcionalidades. Permite transformar estilos con JavaScript.
- **Autoprefixer**: Es un plugin de PostCSS que lee los datos de compatibilidad de los navegadores y añade automáticamente los prefijos necesarios a las propiedades CSS.

### Soporte y Contribuciones

Para soporte, por favor abre un issue en el repositorio de GitHub del proyecto. Si deseas contribuir al proyecto, considera abrir una pull request con tus propuestas de cambios o mejoras.

---
