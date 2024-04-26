// Напишите HTTP сервер и реализуйте два обработчика, где:
// — По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
// — А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
// — Также реализуйте обработку несуществующих роутов (404).
// — * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.


const http = require('http');
const fs = require('fs');

let homePageViews = 0;
let aboutPageViews = 0;

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        homePageViews++;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the Home Page</h1>');
        res.write(`<p>Page views: ${homePageViews}</p>`);
        res.write('<a href="/about">About</a>');
        res.end();
    } else if (url === '/about') {
        aboutPageViews++;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.write(`<p>Page views: ${aboutPageViews}</p>`);
        res.write('<a href="/">Home</a>');
        res.end();
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
