# Front-End Application

## Información de las herramientas

- Framework: Angular 20.1.3
- Node Version: 20.19.4

## Arquitectura de Carpetas

![arquitectura.png](public/assets/images/arquitectura.png)

## SRC/SCSS (Sistema de diseño)
Contiene todo el sistema de diseño
### /base:
Contiene los valores globales, un reset sencillo, tipografia y archivo de variables.

### /components:
Contiene para este caso los archivos de los cards de los productos en venta y los modificadores para los inputs.

### /layout:
Contiene elementos de armado  de partes del aplicativo que podrian reutilizarse como el footer, la navegacion, paginacion.

#### NOTA: este es un trabajo en proceso, y el objetivo es establecer una estructura desacoplada pensada en modulos y componentes.

## SRC/APP (Codebase)

### /layout:
contiene la sección main o wrapper para enlatar el contenido central de la aplicación.

### /pages:
contiene las rutas, de momento la home (/) es la unica ruta, y la pagina que esta creada es la del catalogo de productos.

### /shared:
contiene las elementos reutilizables como el header (navigation) y el footer, adicional se separo el componente cards el cual ya funciona como un componente independiente.

#### NOTA: este es un trabajo en proceso, y el objetivo es establecer una estructura desacoplada pensada en modulos y componentes.


## SRC/TEST (Unit Testing)
Se agrupan todos los test en la carpeta test para mantener el codigo funcional sobre el SRC y los test agrupados para su objetivo especifico.

## PUBLIC
### /assets:
Contiene todos los activos como imagenes de producto, iconos, logos y cualquier elemento visual. Aqui se podrian colocar elementos estaticos publicos como fonts, xml, o json.

# ¿Cómo Ejecutar?
Descargue o clone el repositorio en una carpeta conocida.
## Local Compile

Instalar las dependencias:
Verifique antes que posee la versión adecuadas de Node.js para evitar problemas. En el inicio de este documento se coloco la versión en la que fue construido.

```bash
npm install
```

Ejecutar para correr el servidor en el equipo local:

```bash
ng serve
```

Para construir la aplicación y empaquetarla para usarla en un nginx o docker:

```bash
ng build
```

Ejecución de test unitarios (se esta usando jasmine)
```bash
ng test
```
