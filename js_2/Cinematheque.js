import mongoose from 'mongoose';
import {connectionString} from './credentials.js'
const { Schema } = mongoose;

// For security, connectionString should be in a separate file and excluded from git
//const connectionString = "mongodb+srv://dbUser:mzhopka0713@cluster0.rpuyr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString, {
    dbName: 'sccproject',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const cinemathequeSchema = new Schema({
 title: { type: String, required: true },
 name: String,
 genre: String,
 year: String,
 director: String,
 cast: Array
});

export const Cinematheque = mongoose.model('Cinematheque', cinemathequeSchema, 'cinematheque');