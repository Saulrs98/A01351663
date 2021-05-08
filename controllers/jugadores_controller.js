const Jugador = require('../models/jugador');

exports.getNuevoJugador = (request, response, next) => {
    response.render('nuevo_jugador', { 
        titulo: "Nuevo jugador"
    });
};

exports.postNuevoJugador = (request, response, next) => {
    console.log(request.body);
    const jugador = new Jugador(request.body.nombre, request.body.descripcion, 'https://i.pinimg.com/originals/d1/ea/63/d1ea63758ec65e6d6db3545ff6dff15f.png');
    mascota.save();

    response.redirect('/jugadores');
}

exports.get = (request, response, next) => {
    //Devuelve la vista jugadores.ejs que esta en carpeta views
    const jugadores = Jugador.fetchAll();

    response.render('jugadores', { 
        jugadores: jugadores,
        titulo: "Jugadores"
    });
}