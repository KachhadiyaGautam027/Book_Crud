const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    type: String,
    author: String,
    price: Number,
});

const bookModel = mongoose.model("booksCollection", bookSchema);

module.exports = bookModel;
