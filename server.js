import http from 'http';
import method from 'http';

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;

    const { method } = req;

    if (method === 'GET') {
        res.end('Ini adalah method GET');
    }

    if(method === 'POST') {
        res.end('Ini adalah method POST');
    }

    if(method === 'PUT') {
        res.end('Ini adalah method PUT');
    }

    if(method === 'DELETE') {
        res.end('Ini adalah method DELETE');
    }
}

const server = http.createServer(requestListener);
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});