const express = require('express');
const app = express();
const router = express.Router();

const path = require('path');

app.get('/nuevo-jugador', (request, response, next) => {
    response.send('<form action="/nuevo-jugador" method="POST"><input type="text" name="nombre"><input type="submit" name="enviar" value="agregar"></form>');
});

app.post('/nuevo-jugador', (request, response, next) => {
    console.log(request.body);
    response.send('Gracias! ' + request.body.nombre + ' ha sido agregado a la lista de jugadores');
});

router.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'jugadores.html'));
});

module.exports = router; 