import { expect } from 'chai';
import { removeMovie } from '../data';
//import express from 'express';

const getItem = (movie) => {
    return {name : "Band of Outsiders", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]}
}



describe("test deep equality", () => {
  
    //get movie
 it("getItem returns correct movie", () => {
     let result = getItem("Band of outsiders");
     expect(result).to.deep.equal(
         {name : "Band of Outsiders", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]});
 });

 it("getItem fails with incorrect movie", () => {
     let result = getItem("Harry Portter");
     expect(result).to.be.undefined;
 });


//   //add movie
//  it("addItem creates succesfully a movie", () => {
//     let result = getItem(req.query.name);
//     expect(result).to.deep.equal (
//         {name:req.query.name, genre:req.query.genre, year:req.query.year, director:req.query.director, cast:req.query.cast}
//     )
//   });
 
//  it("addItem failed to create a movie", () => {
//      let result = addItem("failed");
//      expect(result).to.be.undefined;
//  });

//   //delete movie
//  it("removeMovie removed from the cinematheque", () => {
//      let result = removeMovie("High Heels");
//      expect(result).to.deep.equal(
//          {name:"High Heels", genre:"Drama/Romance", year:"1991", director:"Pedro Almodóvar", cast:["Victoria Abril","Marisa Paredes", "Miguel Bosé"] }
//      )
//  });

//  it("failed - High Heels was not removed", () => {
//      let result = removeMovie("failed");
//      expect(result).to.be.undefined;
//  });

});