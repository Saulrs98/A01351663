const num = [50, 70, 90, 88, 91];

function promedio(num) {
  const result = num.reduce((acc, c) => acc + c, 0);
  return result / num.length;
}
const promresult = promedio(num);
console.log(promresult);


const file_system = require('fs');

file_system.writeFileSync('LosMejoresJugadores.txt', 'Cristiano Ronaldo', 'Messi', 'Neymar' );

 
const http = require('http');

const server = http.createServer((request, response) => {
    console.log('Real Madrid');
    console.log(request);
    console.log('Barca');

    response.setHeader('Content-type', 'text/html');
    response.write('<html>');
    response.write('<head><link rel="stylesheet" type="text/css" href="mycss.css"/><meta charset="utf-8" /><title>Mi página</title></head><body>');
    response.write('<h1><strong> El futbol</strong></h1>');
    response.write('<p>Sin duda alguna algo que me apasiona en gran medida es el jugar futbol, practico este desde que tenía 5 años de edad, es decir, desde 2do año de kinder. <br>He tenido experiencias en muchos equipos, con el pasar de los años, he conocido más y más personas gracias a este deporte y, cabe mencionar, que así como <br>he estado en muchos equipos a nivel amateur, también tengo experiencia en el futbol profesional de 3ra división, lo cuál para mi fue más que entrar a un <br>ambiente diferente, esto me ayudó a elegir un camino por el cual irme en mi vida, así que decidí continuar con mis estudios profesionales.<br><br>Así mismo he estado en dos equipos representativos de mi universidad (Irapuato y Querétaro) y creo que lo disfruté mucho más que cuando jugaba en la 3ra,<br>pues el representar a la institución en la que estudio, con personas que comparten la misma motivación para mi es algo único.<br><br><br></p>');
    response.write('</body></html>');
    console.log(response);
    response.end();
});

server.listen(5000);
