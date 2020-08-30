var express = require('express')
var router = express.Router()


let books = [
    { isbn: 1, title: "Intro to Programming", publisher: "pub_1", price: 50 },
    { isbn: 2, title: "Intro to OOP", publisher: "pub_2", price: 40 },
    { isbn: 3, title: "Intro to ALgorithm", publisher: "pub_3", price: 75 }
];



router.get('/', function (req, res) {
    res.json(books);
})
router.get('/:isbn', function (req, res) {
    res.json(books.find(b => b.isbn == req.params.isbn));
})
router.post('/', function (req, res) {
    let book = {
        isbn: books.length + 1,
        title: req.body.title,
        publisher: req.body.publisher,
        price: req.body.price
    };

    books.push(book);
    res.json(book);
})
router.put('/:isbn', function (req, res) {
    let book_index = books.findIndex(b => b.isbn === parseInt(req.params.isbn));
    books[book_index].title = req.body.title;
    books[book_index].publisher = req.body.publisher;
    books[book_index].price = req.body.price;

    res.json(books[book_index]);
})
router.delete('/:isbn', function (req, res) {
    let book_index = books.findIndex(b => b.isbn === parseInt(req.params.isbn));
    delete books[book_index];
    res.json("Done");
})


module.exports = router