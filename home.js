const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html', 'utf8');
const about = fs.readFileSync('./about.html', 'utf8');
const services = fs.readFileSync('./services.html', 'utf8');
const contact = fs.readFileSync('./contact.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8'); // Read the CSS file

const server = http.createServer((req, res) => {
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if (url == '/') {
        res.write('<style>' + css + '</style>'); // Inject the CSS styles inline
        res.end(home);
    } else if (url == '/about') {
        res.write('<style>' + css + '</style>'); // Inject the CSS styles inline
        res.end(about);
    } else if (url == '/services') {
        res.write('<style>' + css + '</style>'); // Inject the CSS styles inline
        res.end(services);
    } else if (url == '/contact') {
        res.write('<style>' + css + '</style>'); // Inject the CSS styles inline
        res.end(contact);
    } else {
        res.statusCode = 404;
        res.end('<h1>404 not found</h1>');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
