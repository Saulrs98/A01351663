console.log('Hola mundo');

const express = require('express');
const app = express();

const rutasJugadores = require('./routes/jugadores');

app.use('/jugadores', rutasJugadores);

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});


 
app.use('/futbol', (request, response, next) => {
    response.send('Respuesta de la ruta "/futbol"'); 
});

app.use('/', (request, response, next) => {
    response.send('Bienvenido'); 
});

app.use((request, response, next) => {
	console.log('Error 404');
	response.status(404);
    response.send('Lo sentimos, pagina no encontrada'); 
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});



app.listen(3000);