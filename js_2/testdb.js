import { Cinematheque } from "./Cinematheque.js";

// return all records
Cinematheque.find({}).lean()
  .then((cinematheque) => {
    console.log(cinematheque);
  })
  .catch(err => next(err)); 