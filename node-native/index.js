const http = require('http');

http.createServer((req, res) => {
	if (req.url === '/') return res.end('hello, world!');
}).listen(1337);