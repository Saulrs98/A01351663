const num = [50, 70, 90, 88, 91];

function promedio(num) {
  const result = num.reduce((acc, c) => acc + c, 0);
  return result / num.length;
}
const promresult = promedio(num);
console.log(promresult);


const file_system = require('fs');

file_system.writeFileSync('LosMejoresJugadores.txt', 'Cristiano Ronaldo', 'Messi', 'Neymar' );

 
