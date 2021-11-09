// Creating HTTP Server on Port 8080
const http = require("http");
const host = 'localhost';
const port = 8080;
const url = require('url');

const requestListener = function (req, res) {
    var q = new URL('req.url', true); //Parse the URL 
    var filename = '.' + q.pathname; //Retrieve file name from the parsed URL
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end('My first server!');    
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});