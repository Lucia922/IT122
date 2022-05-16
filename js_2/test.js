import { expect } from 'chai';

const getItem = (movie) => {
    return {name : "Band of Outsiders", genre : "Crime/Drama", year : 1964, director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]}
}


describe("test deep equality", () => {

 it("getItem returns correct book", () => {
     let result = getItem("band of outsiders");
     expect(result).to.deep.equal(
         {name : "Band of Outsiders", genre : "Crime/Drama", year : 1964, director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"]});
 });

 it("getItem fails with incorrect movie", () => {
     let result = getItem("Harry Porter");
     expect(result).to.be.undefined;
 });

 

});


