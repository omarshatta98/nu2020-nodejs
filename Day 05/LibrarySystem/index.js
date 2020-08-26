const express = require('express');
const app = express();
app.use(express.json());

let books = [
    { isbn: 1, title: "Intro to Programming", publisher: "pub_1" },
    { isbn: 2, title: "Intro to OOP", publisher: "pub_2" },
    { isbn: 3, title: "Intro to ALgorithm", publisher: "pub_3" }
];


app.get("/", function (req, res) {
    res.json("Hello To Library Management System")
});
app.get("/books", function (req, res) {
    res.json(books)
});
app.get("/books/:isbn", function (req, res) {
    res.json(books.find(b => b.isbn == parseInt(req.params.isbn)))
});
app.post("/books", function (req, res) {
    let book = {
        isbn: books.length + 1,
        title: req.body.title,
        publisher: req.body.publisher
    };

    books.push(book);
    res.json(book);
});
app.put("/books/:isbn", function (req, res) {
    let book_index = books.findIndex(b => b.isbn === parseInt(req.params.isbn));
    books[book_index].title = req.body.title;
    books[book_index].publisher = req.body.publisher;

    res.json(books[book_index]);
});
app.delete("/books/:isbn", function (req, res) {
    let book_index = books.findIndex(b => b.isbn === parseInt(req.params.isbn));
    delete books[book_index];
    res.json("Done");
});

app.listen(4000);