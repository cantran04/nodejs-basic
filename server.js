const http = require('http');

const server = http.createServer((req, res) =>{
    console.log("run request ..");
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>Hello world!</h3>');
    res.write('<h2>From Can & beginner nodejs </h2>');
    res.end();
    
})

server.listen(3000, 'localhost', () => {
    console.log('Nodejs server is running on port: 3000')
})
