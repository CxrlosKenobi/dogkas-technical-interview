## Instrucciones para levantar Backend

1. Ejecutar `npm install`
2. Ejecutar `docker compose --file docker-compose.yaml build`
3. Ejecutar `docker compose --file docker-compose.yaml up -d`
4. Esperar unos 10 segundos que levante el sevidor de MySQL
5. Ejecutar `npm run migration`
6. Reiniciar el contenedor de la API