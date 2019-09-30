const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sufail:sufail@cluster0-wpsv7.mongodb.net/test?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    
    productName : String,
    genre: String,
    releaseDate : String,
    description : String,
    imageUrl : String
});

var Productdata = mongoose.model('movies', NewProductSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Productdata;