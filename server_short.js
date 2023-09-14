// Packages
const http = require('http')
const fsp = require('fs').promises

// Server properties
const host = 'localhost'
const port = 9045

// HTML pages
let helloHTML

// Set server response
const server = http.createServer( function (req, res) {
	res.setHeader('Content-Type', 'text/html')
	res.writeHead(200)
	res.end(helloHTML)
})

// Load HTML files then start the server
fsp.readFile('./hello_world.html', 'utf-8')
.then(data => {
	html = data
	server.listen(port, host)
})
.catch(err => {
	res.writeHead(500)
	res.end(err)
	return
})
