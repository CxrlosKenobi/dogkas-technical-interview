# Dogkas Technical Test Project
> *work in progress*

Este proyecto fue desarrollado como parte del proceso de entrevista técnica para Dogkas. Consiste en una aplicación de backend construida con Node.js, montada en Yarn y una aplicación frontend construida con Ionic y Angular.


## Descripción

El proyecto se divide en dos partes principales:

### Backend
La aplicación de backend proporciona una API REST que lista geolocalizaciones generadas aleatoriamente. Esta API se construyó utilizando Node.js y expone un endpoint GET /services.

### Frontend
La aplicación frontend muestra un mapa interactivo que utiliza los datos de la API del backend. Esta aplicación se desarrolló utilizando Ionic y Angular, y está diseñada para ser responsive y compatible con dispositivos móviles.



## Troubleshooting

### Backend

Error al levantar el contenedor de Docker en macOS
> docker compose --file docker-compose.yaml up -d

- **Problema**: `Error response from daemon: network dogkas-network not found.`
- **Solución**: Ejecuta `docker network create dogkas-network para crear la red necesaria`.


Error de permisos de montaje en Docker (macOS)
> docker compose --file docker-compose.yaml up -d

- **Problema**: `Mounts denied: The path [...] is not shared from the host and is not known to Docker.`
- **Solución**: Agrega la ruta indicada a las rutas compartidas en `Docker Desktop > Preferencias... > Recursos > Compartir Archivos`.
