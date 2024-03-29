# Dogkas: Prueba técnica
> Prueba técnica para Senior Software Developer

## Objetivos de la prueba técnica
- Revisar la capacidad del candidato de interpretar los requerimientos expresados en la prueba técnica
- Revisar la capacidad de solución de problemas del candidato
- Revisar la capacidad del candidato de plantear soluciones tecnológicas acordes y eficientes.

## Recomendaciones para trabajar con esta prueba técnica
- Tener instalado Docker en tu computador
- Tener instalado Node v20 o superior (se recomienda tener instalado NVM)

## Requerimientos y condiciones
- Plazo de entrega son 92hrs hábiles desde la fecha de entrega de la prueba
- Se debe entregar la prueba técnica finalizada en un repositorio público del candidato. Se debe realizar una copia de este repositorio, con la solución dentro
- La API Key para Google Maps será provista en un correo al momento de entregar la dirección del repositorio de esta prueba técnica
- No es necesario desplegar estos artefactos en ningun lugar (con publicar el código en tu repositorio basta)

## Descripción de la prueba
Esta prueba técnica consta de una aplicación backend (ya construída) y una aplicación frontend (a construir).
La aplicación backend es una API REST con un solo endpoint disponible: `GET /services`. Este endpoint al llamarlo permite listar una serie de geolocaciones con un nombre en particular.
El objetivo de esta prueba es construir una seeder para crear puntos aleatorios usando una librería popular de generación de contenido (FakerJS) y generar una aplicación frontend con Ionic y Angular que permita mostrar la información proveniente de la API. Esta aplicación frontend solo debe hacer uso de los componentes web de Ionic y en ningun caso el uso de Capacitor.

## Instrucciones
> Para revisar las instrucciones de instalación y como levantar el contenedor de la API REST, revisar el archivo `INSTRUCCIONES.md` presente en la carpeta `backend`
#### Bakend
- Se debe generar un seeder que permita poblar la tabla de `services` utilizando KnexJS y generando información con la librería [fakerjs](https://fakerjs.dev/). Se deben generar 100 registros aleatoreos. Para crear nuevo seeder se debe utilizar [Knex Migration](https://knexjs.org/guide/migrations.html#seed-files)

#### Frontend
- Se debe generar una aplicación con Ionic y Angular dentro de la carpeta `frontend` que permita mostrar un mapa de Google Maps. Debe funcionar de la siguiente manera
    - Crear un nuevo componente llamado `MapsComponent` que se utilice en el componente principal `app.component.ts`.
    - Se debe crear un service llamado `ApiService` que permita realizar las llamadas al único endpoint disponible en el backend de este repositorio.
    - El componente `app.component.ts` debe hacer uso del service `ApiService` para realizar las llamadas de red
    - El componente debe mostrar un mapa utilizando la librería oficial de [Google Maps de Angular](https://www.npmjs.com/package/@angular/google-maps).
    - El componente `MapsComponent` debe aceptar una propiedad input llamada `pointList` en donde se deben pasar un array de objetos de puntos geolocalizables
    - El componente `MapsComponent` debe leer la API Key desde el archivo `environment.ts`.
    - El componente `MapsComponent` debe mostrar cada uno de los puntos en el mapa que provengan de la propiedad `pointList`

## Criterios de evaluación
- Puntos totales: 40 puntos

| Evaluación                                                       | Puntos |
|------------------------------------------------------------------|--------|
| Creación del seeder con KnexJS y Faker                           | 10 pts |
| Creación del proyecto Ionic - Angular                            | 10 pts |
| Creación del componente de Mapas con Google Maps                 | 10 pts |
| Mostrar adecuadamente la información en el mapa con MapMarkers   | 10 pts |

## Preguntas
Las preguntas sobre esta prueba técnica puedes realizarlas a contacto [at] dogkas.cl