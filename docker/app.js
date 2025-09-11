const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// Función para servir HTML básico
function serveHTML(res) {
    const htmlPath = path.join(__dirname, 'index.html');
    fs.readFile(htmlPath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error cargando la página');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
}

// Crear servidor
const server = http.createServer((req, res) => {
    if (req.url === '/api') {
        // Servicio API que devuelve JSON
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'Hola desde la API Node.js 🚀', time: new Date() }));
    } else {
        // Página principal
        serveHTML(res);
    }
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
