var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE 'html'><html>");
  response.write("<head><title>Hello World Page</title></head><body>");
  response.write("Hello World this !");
  response.write("</body></html>");
  response.end();
});

server.listen(8001);
console.log("Server is listening");