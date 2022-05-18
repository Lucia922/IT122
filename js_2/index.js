import http from 'http';
import path from 'path';
import { parse } from "querystring"; 
import {getItem, getAll} from './data.js';
import express from 'express';
import { name } from 'ejs';
import { Cinematheque } from "./Cinematheque.js";
// import req from 'express/lib/request';
// import res from 'express/lib/response';

//import cinematheque from './data.js';
//import querystring from 'querystring';
//import * as data from './data.js';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies
app.set('view engine', 'ejs'); // set the view engine to ejs


// cinematheque server's 'home' Route to use MongoDb database
app.get('/', (req, res) => {
  Cinematheque.find({}).lean()
    .then((cinematheque) => {
      // respond to browser only after db query completes
      res.render('home', { cinematheque });
    })
    .catch(err => next(err))
});

// send static file as response
// app.get('/', (req,res) => {
//   res.type('text/html');
//   res.render("home", {cinematheque: getAll()});
//   //res.sendFile('./public/home.html');
//  });

// cinematheque server's 'detail' Route to use MongoDb database
app.get('/detail', (req,res,next) => {
  // db query can use request parameters
  Cinematheque.findOne({ name:req.query.name }).lean()
      .then((movie) => {
          res.render('details', {result: movie, name:req.query.name } );
      })
      .catch(err => next(err));
});

// app.get('/detail', (req,res) => {
//   res.type('text/html'); 
//   console.log(req.query);
//   let result = getItem(req.query.name);
//   res.render("details", {name: req.query.name, result: result});
//   });
//   //res.sendFile('./public/home.html');

// add movie object into mogodb using postman 1
// app.post('/add', (req,res,next) => {
//   // find & update existing movie, or add new
//   console.log(req.body)
//   if (!req.body.name) {
//     // insert new document
//     let movie = newMovie ({name:req.body.name, genre:req.body.genre, year:req.body.year, director:req.body.director, cast:req.body.cast});
//     if (err) return next(err);
//     console.log(newMovie)
//     res.json({updated: 0, name: newMovie.name});
//   }
// });

// add movie object into mogodb using postman 2
app.post('/add', (req,res,next) => {
  const newMovie = {'name':req.body.name, 'genre':req.body.genre, 'year':req.body.year, 'director':req.body.director, 'cast':req.body.cast}

  Cinematheque.updateOne ({'name':req.body.name}, newMovie, {upsert:true}, (err, result) => {
    if (err) return next(err);
    console.log(result);
    res.send( req.body.name + " movie added");
  });

});

// app.post('/detail', (req,res) => {
//   res.type('text/html');
//   console.log(req.body);
//   res.end("Detail for " + req.body["name"])
//   //res.sendFile('./public/home.html');
//  });

// send plain text response
// app.get('/about', (req,res) => {
//   res.type('text/plain');
//   res.send('About page'); 
//  });

app.get('/about', (req, res) => {
  Cinematheque.find({}).lean()
    .then((cinematheque) => {
      // respond to browser only after db query completes
      res.render('about');
    })
    .catch(err => next(err))
});
 
// define 404 handler
app.use((req,res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found');
 });

app.listen(app.get('port'), () => {
  console.log('Express started');
 });

/*
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
      res.write(JSON.stringify(getAll()))
      res.end(); 
      break;
    case '/about':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('What is Cinematheque? A small film library dedicated to avant-garde or classic cinema. Most of Cinematheque films are innovative, eccentric, unique and sometimes frightening.');
      res.end();
      break;
    case '/detail': 
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write("Details for " + JSON.stringify(getItem(query["name"])));
      res.end();
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404:Page not found.');
  }
  
}).listen(process.env.PORT || 3000);
console.log('after createServer')
*/