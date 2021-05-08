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

module.exports = class Jugador {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;

    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        jugadores.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return jugadores;
    }

}