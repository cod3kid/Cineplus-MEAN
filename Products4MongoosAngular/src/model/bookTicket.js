const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sufail:sufail@cluster0-wpsv7.mongodb.net/test?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewTicketSchema = new Schema({
    bookerName:String,
    movieName : String,
    noOfSeats: Number,
    showTime : String,
    day:String,
    month:String,
});

module.exports = mongoose.model('usertickets', NewTicketSchema);                        //UserData is the model and NewBookData is the schema
