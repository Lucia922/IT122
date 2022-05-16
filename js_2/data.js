let cinematheque = [
    { name : "Band of Outsiders", genre : "Crime/Drama", year : "1964", director : "Jean-Luc Godard",  cast : ["Jean-Luc Godard", "Anna Karina", "Sami Frey"] },
    { name : "L'Avventura", genre : "Drama/Ronamce",  year : "1960", director : "Michelangelo Antonioni",  cast : ["Monica Vitti", "Lea Massari", "Gabriele Fezetti"] },
    { name : "In the Mood For Love", genre : "Romance/Drama",  year : "2000", director : "Wong Kar-wai", cast : ["Tony Leung", "Maggie Cheung", "Ping Lam Siu"] },
    { name : "Playtime", genre : "Comedy", year : "1967", director : "Jacques", cast : ["Jacques Tati", "Barbara Dennek", "Jacqueline Lecomte"] },
    { name : "High Noon", genre : "Western/Drama", year : "1952", director : "Fred Zinnemann", cast : ["Gary Cooper", "Grace Kelly", "Fred Zinnemann"]},
    { name : "La Notte", genre : "Drama", year : "1961", director : "Michelangelo Antonioni", cast : ["Monica Vitti", "Lea Massari", "Gabriele Ferzetti"]}
];


export const getItem = (value) => {
    return cinematheque.find((movie) => {
        return movie["name"].toLowerCase() == value.toLowerCase();
    });
};

export const getAll = () => {
    let movies = cinematheque;
    return movies;
};  

export const addItem = (newItem) => {
    //add addItem
    if (typeof newItem != 'object') {
        console.log('new item must be an object')
        return 
    }

    //we know newItem is an object now
    console.log(`add - ${newItem.name}`);
    return true
}

export let result;
// result = addItem('Harry porter');
result = addItem({'name': 'High Heels'});
console.log(`added? ${result}`)





// export const addItem = cinematheque.map((movie) => {
//     return { name: movie.name, genre: movie.genre, year: movie.year, director: movie.director, cast: movie.cast}
// });


// let reMove = cinematheque.pop()
// console.log(reMove);

//console.log(cinematheque);

// export const addItem = (newItem) => {
//     if (typeof newItem !='object') {
//         console.log('new item must be an object')
//         return
//     }

//     console.log(`add - ${newItem.name}`);
// };

// export let result;
//     result = addItem('Harry Porter');
//     console.log(`added? ${result}`);

// const addItem = (newMovie) => {
//     const oldLength = cinematheque.length;
//     // use existing get() method to check if book already in our list
//     let found = this.getItem(newMovie.name);
//     if (!found) {
//         cinematheque.push(newMovie);
//     }
//     // if old & new array lengths differ, item was added
//     return {added: oldLength !== cinematheque.length, total: cinematheque.length};
// };

// let result;
// result = addItem('Harryporter');
// console.log(`added? ${result}`)

//cinematheque.push[{name: "harryporter", genre:"adventure"}];




 