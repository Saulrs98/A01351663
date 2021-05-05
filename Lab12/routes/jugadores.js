const express = require('express');

const router = express.Router();

app.get('/nuevo-jugador', (request, response, next) => {
    response.send('<form action="/nuevo-jugador" method="POST"><input type="text" name="nombre"><input type="submit" name="enviar" value="agregar"></form>');
});

app.post('/nuevo-jugador', (request, response, next) => {
    console.log(request.body);
    response.send('Gracias! ' + request.body.nombre + ' ha sido agregado a la lista de jugadores');
});

module.exports = router; 