# GapsiProviders

## Descripción
Este proyecto de React.js implementa la metodología de Atomic Design para crear una interfaz de usuario modular y fácil de mantener. Además, utiliza Material-UI para una experiencia de usuario elegante y receptiva. La finalidad de esta aplicación es proporcionar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para administrar proveedores de manera eficiente y efectiva.

- Funcionalidades
* Crear Proveedor: Agregar nuevos proveedores con detalles completos.
* Leer Proveedor: Ver información detallada de cada proveedor almacenado.
* Actualizar Proveedor: Modificar la información de los proveedores existentes.
* Eliminar Proveedor: Eliminar proveedores de la base de datos de manera segura.

## Estructura del Proyecto
El proyecto sigue la estructura de Atomic Design para organizar los componentes de la interfaz de usuario en átomos, moléculas, organismos, plantillas y páginas. Además, utiliza Material-UI para diseñar y estilizar los componentes de manera coherente y atractiva.

* Átomos: Componentes básicos y simples como botones, campos de entrada, etc.
* Moléculas: Combinaciones de átomos que forman componentes más complejos, como formularios.
* Organismos: Conjuntos de moléculas y átomos que crean secciones reutilizables, como listas de proveedores.
* Plantillas: Diseños de página que colocan los organismos en una estructura específica.
* Páginas: Páginas completas de la aplicación que utilizan las plantillas para mostrar contenido específico.

## Requisitos
Asegúrate de tener Node.js y npm instalados en tu sistema. Si no los tienes instalados, puedes descargarlos desde nodejs.org.

1. Instalación y Ejecución
```bash
git clone ...
```
2. Instala las Dependencias
```bash
cd GipsiFrontend
npm install
```
3. Configurar variables de entorno
 * Antes de ejecutar la aplicación, es necesario configurar algunas variables de entorno. Cree un archivo .env en el directorio raíz del proyecto y defina las siguientes variables:
```bash
    REACT_APP_GAPSI_API_URL="http://localhost:4000/api/v1"
```

4. Ejecuta la Aplicación:
```bash
npm start o npm run start
```



