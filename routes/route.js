const express = require('express');
const routes = express();
const bookModel = require('../models/book.model');
const bodyParser = require('body-parser');

routes.get('/', (req, res) => {

    res.render('index', { title: "Book Crud" });
})

routes.get('/viewBook', async (req, res) => {

    let books = await bookModel.find({});
    console.log("Books ==> ", books);

    res.render("view", { books });
})

routes.post('/addBook', async (req, res) => {

    let { editId } = req.body;

    if (!editId) {
        let doc = new bookModel({
            bookName: req.body.bookname,
            type: req.body.type,
            author: req.body.author,
            price: req.body.price
        })

        doc.save();

        console.log("Book Created...");

    } else {
        let updatedBook = await bookModel.updateOne({ "_id": editId }, {
            bookName: req.body.bookname,
            type: req.body.type,
            author: req.body.author,
            price: req.body.price
        });

        console.log("update Completed...", req.body.bookname);

    }

    res.redirect('/viewBook');

})

routes.get('/deleteBook/:id', async (req, res) => {

    let { id } = req.params;
    console.log("ID ===> ", id);

    await bookModel.deleteOne({ _id: id });

    res.redirect("/viewBook");
})

routes.get('/editBook/:id', async (req, res) => {

    let { id } = req.params;

    let singleBook = await bookModel.findById(id);

    res.render('edit', { singleBook });
})

module.exports = routes;
