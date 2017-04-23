var http = require('http');
var fs = require('fs');
var lstPort = 3000;

function send404Response(response){
    response.writeHead(404,{"Context-Type" : "text/plain"});
    response.write("Error 404: Page not found");
    response.end();
}

function onRequest(request, response){
    if(request.method=='GET' && request.url=='/')
    {
        response.writeHead(200,{"Context-Type" : "text/html"});
        fs.createReadStream("./index.html").pipe(response);    
    }
    else
    {
        send404Response(response);
    }
}
http.createServer(onRequest).listen(lstPort);
console.log("Server is up and listening to port:" + lstPort + ".");
