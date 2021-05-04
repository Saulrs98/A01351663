const file_system=require('fs');

const http=require('http');

const server=http.createServer((request,response) =>{
	console.log(request.url);

	  if(request.url === '/') {
	  	response.setHeader('Content-Type', 'text/html');
	  	response.write('<html>');
	  	response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Lab10</title></head><body>');
	  	response.write('<h1>Lab 10</h1>');
        response.write('<br><h2>Los mejores jugadores de futbol</h2>');
	  	response.write('<ul>');
	  	response.write('<li><a href="/Cristiano">Cristiano Ronaldo</a></li>');
	  	response.write('<li><a href="/Messi">Messi</a></li>');
        response.write('<li><a href="/Escribe">Genera archivo de texto</a></li>');
	  	response.write('</ul>');
	  	response.write('</body></html>');
	  	response.end();
	  } else if (request.url === '/Cristiano') {
	  		response.setHeader('Content-Type', 'text/html');
	  	    response.write('<html>');
	  	    response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Lab10</title></head><body>');
	  	    response.write('<img alt="Imagen de Cristiano" src="https://www.ecestaticos.com/image/clipping/73bb9e27fe7776087c497d4bd2f3a7b1/la-obsesion-de-cristiano-ronaldo-para-llegar-fresco-a-los-40-anos-su-rival-es-ibrahimovic.jpg">');
	  	    response.write('</body></html>');
	  	    response.end();

	  } else if (request.url === '/Messi') {
	  		response.setHeader('Content-Type', 'text/html');
	  	    response.write('<html>');
	  	    response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Lab10</title></head><body>');
	  	    response.write('<img alt="Imagen de Messi" src="https://static.dw.com/image/53452003_303.jpg">');
	  	    response.write('</body></html>');
	  	    response.end();
	  } else if (request.url === '/Escribe' && request.method === "GET") {
	  	response.setHeader('Content-Type', 'text/html');
	  	response.write('<html>');
	  	response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Lab10</title></head><body>');
	  	response.write('<h1>Escribe en un archivo de texto</h1>');
	  	response.write('<form action="/Escribe" method="POST">');
	  	response.write('Escribe: <input type="text" name="write"><br>');
	  	response.write('<input type="submit" name="enviar" value="escribir"><br>');
	  	response.write('</form>');
	    response.write('</body></html>');
	    response.end();

	} else if (request.url === '/Escribe' && request.method === "POST") {
		const datos = [];
		 request.on('data', (dato) => {
		 	console.log(dato);
		 	datos.push(dato);
		 });
		 return request.on('end', () => {
		 	const datos_completos = Buffer.concat(datos).toString();
		 	console.log(datos_completos);
		 	const archivotxt = datos_completos.split('=')[1].split('&')[0];
		 	file_system.writeFileSync('Escribe.txt', archivotxt);
		 	response.statusCode = 302;
		 	response.setHeader('Location', '/');
		 	response.end();
		 });
    } else if (request.url === '/admin') {
    	response.statusCode = 403;
    	response.setHeader('Content-Type', 'text/html');
    	response.write('<html>');
    	response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Recurso prohibido</title></head><body>');
    	response.write('<h1>Recurso prohibido</h1>');
    	response.write('</body></html>');
    	response.end();
    } else {
    	response.statusCode = 404;
    	response.setHeader('Content-Type', 'text/html');
    	response.write('<html>');
    	response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Página no disponible</title></head><body>');
    	response.write('<h1>Página no disponible</h1>');
    	response.write('</body></html>');
    	response.end();
    }


});

server.listen(4040);
