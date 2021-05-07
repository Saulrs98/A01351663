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
    //response.sendFile(path.join(__dirname, '..', 'views', 'jugadores.html'));
    const jugadores = [
        {
            nombre: 'Cristiano Ronaldo',
            descripcion: '5 balones de oro',
            imagen: 'https://www.ecestaticos.com/image/clipping/73bb9e27fe7776087c497d4bd2f3a7b1/la-obsesion-de-cristiano-ronaldo-para-llegar-fresco-a-los-40-anos-su-rival-es-ibrahimovic.jpg'
        },
        {
            nombre: 'Messi',
            descripcion: '6 balones de oro',
            imagen: 'https://ep01.epimg.net/deportes/imagenes/2019/04/19/actualidad/1555686393_895375_1555686917_noticia_normal.jpg'
        },
        {
            nombre: 'Ronaldinho',
            descripcion: '1 balon de oro',
            imagen: 'https://www.fcbarcelonanoticias.com/uploads/s1/11/97/73/0/ronaldinho-celebrando-un-gol.jpeg'
        },
        {
            nombre: 'Ronaldo Nazario',
            descripcion: '2 balones de oro',
            imagen: 'https://www.conmebol.com/sites/default/files/r9.jpg'
        }
    ];
    response.render('jugadores', { 
        jugadores: jugadores,
        titulo: "Jugadores"
    });
});

module.exports = router;  