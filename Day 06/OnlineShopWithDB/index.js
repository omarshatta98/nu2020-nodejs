const mongoose = require('mongoose');
const express = require('express');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });
//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function () {
//  console.log("we're connected!");
//});

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number
});
const Product = mongoose.model("Product", productSchema);

app.get("/", function (req, res) {
    res.json("Hello Mongo DB")
});
// Create
app.post("/products", function (req, res) {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product
        .save()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err)
        });
});
// Read
app.get("/products/:id", function (req, res) {
    Product.findOne({ _id: req.params.id })
        .exec()
        .then(prod => {
            res.json(prod);
        })
        .catch(err => {
            res.json(err);
        });
});
app.get("/products", function (req, res) {
    Product.find()
        .exec()
        .then(prod => {
            res.json(prod);
        })
        .catch(err => {
            res.json(err);
        });
});
// Update
app.put("/products/:id", function (req, res) {
    let id = parseInt(req.params.id);
    Product.update({ _id: id })
        .exec()
        .then(prod => {
            res.json(prod);
        })
        .catch(err => {
            res.json(err);
        });
});
// Delete
app.delete("/products/:id", function (req, res) {
    Product.remove({ _id: req.params.id })
        .exec()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(5000);
