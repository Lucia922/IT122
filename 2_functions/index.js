import http from 'http';
import { parse } from "querystring"; 
import {getItem, getAll} from './data.js';
//import cinematheque from './data.js';
//import querystring from 'querystring';
//import * as data from './data.js';
 
http.createServer(function(req,res){
  console.log('createServer got request')
  const path = req.url.toLowerCase(); 
  console.log(path)
  let url_parts = req.url.split("?"); //seperate route from query string
  console.log(url_parts)
  let query = parse(url_parts[1]); //convert query string to a JS object
  console.log(query)
  //console.log(data.getItem("playtime"));
  switch(url_parts[0]) {
    case '/': 
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('Hello! This is a single-page-application project for IT122 Javascript2 in SCC 2022 Spring quarter.');
      res.write(getAll())
      res.end(); 
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('What is Cinematheque? A small film library dedicated to avant-garde or classic cinema. Most of Cinematheque films are innovative, eccentric, unique and sometimes frightening.');
      res.end();
      break;
    case '/detail': 
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write("Details for " + query["name"]);
      res.end();
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404:Page not found.');
  }
  
}).listen(process.env.PORT || 3000);
console.log('after createServer')
