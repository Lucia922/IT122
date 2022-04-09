import http from 'http';

http.createServer(function(req,res){
  console.log('createServer got request')
  const path = req.url.toLowerCase();
  switch(path) {
    case '/': 
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Hello! This is a single-page-application project for IT122 Javascript2 in SCC 2022 Spring quarter.');
      res.end();
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('My name is Jinhee. My favorites are coffee & tea, hiking in the Cascades, paddle boarding, organizing, and sushi.');
      res.end();
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404:Page not found.');
  }
  
}).listen(process.env.PORT || 3000);
console.log('after createServer')
