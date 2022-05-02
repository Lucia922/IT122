let cinematheque = [
    { name : "Band of Outsiders", genre : "Crime/Drama", year : 1964, director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"] },
    { name : "L'Avventura", genre : "Drama/Ronamce",  year : 1960, director : "Giovanni Fusco",  cast : ["Monica Vitti", "Lea Massari", "Gabriele Fezetti"] },
    { name : "In the Mood For Love", genre : "Romance/Drama",  year : 2000, director : "Wong Kar-wai", cast : ["Tony Leung", "Maggie Cheung", "Ping Lam Siu"] },
    { name : "Playtime", genre : "Comedy", year : 1967, director : "Jacques", cast : ["Jacques Tati", "Barbara Dennek", "Jacqueline Lecomte"] },
    { name : "High Noon", genre : "Western/Drama", year : 1952, director : "Fred Zinnemann", cast : ["Gary Cooper", "Grace Kelly", "Fred Zinnemann"]}
];



export const getItem = (value) => {
    return JSON.stringify(cinematheque.find((movie) => {
        return movie["name"] == value;
    }),null,5)
}

export const getAll = () => {
    let movies = JSON.stringify(cinematheque,null,5);
    return movies;
}   



//exports.getAll = () => {      
//    return cinematheque;      
//}

//exports.getItem = name => {       
//   const item = cinematheque.find(cinematheque => cinematheque.name === name);       
//   return item;         
//}













 