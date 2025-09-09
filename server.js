import http from 'http';

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;

    const { method, url } = req;

    if(url === '/') {
        // TODO 2: logika respons bila url bernilai '/'
        if(method === 'GET') {
            res.end('<h1>Ini halaman HOME PAGE</h1>')
        }else {
            res.end(`<h1>${method} tidak tersedia</h1>`)
        }
    } else if (url === '/about') {
        // TODO 3: logika respons bila url bernilai '/about'
        if(method === 'GET') {
            res.end('<h1>Halo! Ini halaman about</h1>')
        } else if(method === 'POST'){
            let body = [];

            req.on('data', (chunk) => {
                body.push(chunk);
            });

            req.on('end',() => {
                body = Buffer.concat(body).toString();
                const {name} = JSON.parse(body);
                res.end(`<h1>Halo, ${name}! ini adalah halaman about</h1>`)
            })
        } else {
            res.end(`<h1>${method} tidak tersedia</h1>`)
        }
    } else {
        // TODO 4: logika respons bila url selain '/' dan '/about'
        res.statusCode = 404;
        res.end('<h1>Halaman tidak ditemukan!</h1>');
    }

    /*if (method === 'GET') {
        res.end('Ini adalah method GET');
    }

    if(method === 'POST') {
        let body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            res.end(`<h1>Hai, ${name}</h1>`)
        })
    }*/

}

const server = http.createServer(requestListener);
const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});