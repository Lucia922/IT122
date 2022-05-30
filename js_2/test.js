'use strict'

import { expect } from 'chai';
import { Cinematheque } from "./Cinematheque.js";


let cinematheque = [
    { name : "Band of Outsiders", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"] },
    { name : "L'Avventura", genre : "Drama/Ronamce",  year : "1960", director : "Michelangelo Antonioni",  cast : ["Monica Vitti", "Lea Massari", "Gabriele Fezetti"] },
    { name : "In the Mood For Love", genre : "Romance/Drama",  year : "2000", director : "Wong Kar-wai", cast : ["Tony Leung", "Maggie Cheung", "Ping Lam Siu"] },
    { name : "Playtime", genre : "Comedy", year : "1967", director : "Jacques", cast : ["Jacques Tati", "Barbara Dennek", "Jacqueline Lecomte"] },
    { name : "High Noon", genre : "Western/Drama", year : "1952", director : "Fred Zinnemann", cast : ["Gary Cooper", "Grace Kelly", "Fred Zinnemann"]},
    { name : "La Notte", genre : "Drama", year : "1961", director : "Michelangelo Antonioni", cast : ["Monica Vitti", "Lea Massari", "Gabriele Ferzetti"]}
];

const getItem = (movie) => {
    return {name : "Band of Outsiders", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]}
};


const addMovie = (name, genre, year, director, cast) => {
    if (name == undefined || genre == undefined || year == undefined || director == undefined || cast == undefined) {
        return false;

        Cinematheque.push ({ name: name, genre: genre, year: year, director: director, cast: cast});
    }
};

const removeMovie = (name) => {
    Cinematheque.deleteOne((movie) => {
        return cinematheque.name !== name

    });   
};

// const addMovie = (newMovie) => {
//     const oldLength = cinematheque.length;
//     // use existing get() method to check if book already in our list
//     let found = this.get(newMovie.name);
//     if (!found) {
//         cinematheque.push(newMovie);
//     }
//     // if old & new array lengths differ, item was added
//     return {added: oldLength !== cinematheque.length, total: cinematheque.length };
// };


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
    let result = addMovie({name : "Harry Porter", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]});
    expect(result.added).to.be.true;
});

// it("addItem creates succesfully a movie", () => {
//     let result = addMovie(req.query.name);
//     expect(result).to.deep.equal (
//         {name:req.query.name, genre:req.query.genre, year:req.query.year, director:req.query.director, cast:req.query.cast}
//     )
//   });
 
 it("fails to add an existing movie", () => {
     let result = addMovie({name : "Band of Outsiders", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]});
     expect(result).to.be.false;
 });


//delete movie
 it("removeMovie removed from the cinematheque", () => {
     let result = removeMovie("High Heels");
     expect(result).to.deep.equal(
         {name:"High Heels", genre:"Drama/Romance", year:"1991", director:"Pedro Almodóvar", cast:["Victoria Abril","Marisa Paredes", "Miguel Bosé"] }
     )
 });

//  it("removed an existing movie", () => {
//     let result = removeMovie({name : "Band of Outsiders", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]});
//     expect(result).to.be.true;
        
// });

 it("fails to remove an invalid movie", () => {
     let result = removeMovie("Little mom");
     expect(result.deleted).to.be.false;
 });

});