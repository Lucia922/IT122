import http from 'http';

http.createServer(function(req,res){
  console.log('createServer got request')
  const path = req.url.toLowerCase();
  switch(path) {
    case '/': 
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('hello');
      res.end();

      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404:Page not found.');
  }
  
}).listen(process.env.PORT || 3000);
console.log('after createServer')
