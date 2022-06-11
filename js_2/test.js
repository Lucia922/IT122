'use strict'

import { expect } from 'chai';
import express from 'express';
import {getItem, getAll, addMovie, removeMovie} from './data.js';
import { Cinematheque } from "./Cinematheque.js";


describe("test deep equality", () => {
    
  
//get movie

 it("getItem returns correct movie", () => {
     let result = getItem("Band of outsiders");
     expect(result).to.deep.equal(
         {name : "Band of Outsiders", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]});
 });


 it("fails to return an invalid movie", () => {
     let result = getItem("Harry Porter");
     expect(result).to.be.undefined;
 });


//add movie

it("adds a new movie", () => {
    let result = addMovie({name : "Insiders", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]});
    expect(result).to.be.false;
});

 
it("fails to add an existing movie", () => {
     let result = addMovie({name : "Band of Outsiders", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]});
     expect(result).to.be.false;
 });


//delete movie

it("deletes an existing movie", () => {
    let result = removeMovie("High Heels");
    expect(result).to.be.undefined;
       
});


it("fails to remove an invalid movie", () => {
     let result = removeMovie("Our Blues");
     expect(result).to.be.undefined;
 });

});









// it("adds a new movie", () => {
//     let result = getItem(req.query.name);
//     expect(result).to.deep.equal (
//         {name:req.query.name, genre:req.query.genre, year:req.query.year, director:req.query.director, cast:req.query.cast}
//     )
//   });

// it("fails to add an existing movie", () => {
//       let result = cinematheque.addMovie("failed");
//       expect(result).to.be.undefined;

//   });




// it("deletes an existing movie", () => {
//      let result = removeMovie("Band of outsiders");
//      expect(result).to.deep.equal(
//          {name : "Band of Outsiders", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]});
//  });




// it("deletes an existing movie", () => {
//      let result = removeMovie({name : "Band of Outsiders", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]});
//      expect(result).to.be.true;
        
//  });




 
        