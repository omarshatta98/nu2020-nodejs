const express = require('express');
const app = express();

app.use(express.json());

let products = [
    { id: 1, name: "PC", price: 25000 },
    { id: 2, name: "Labtop", price: 20000 },
    { id: 3, name: "Mobile", price: 15000 },
    { id: 4, name: "TV", price: 22000 },
    { id: 5, name: "XBox", price: 18000 },
];



app.get('/', function (req, res) {
    res.send("Hello express");
});
app.get('/products', function (req, res) {
    res.json(products);
});
app.get('/product/:id', function (req, res) {
    res.json(products.find(p => p.id == parseInt(req.params.id)));
});
app.post('/product', function (req, res) {
    let prd = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    res.json(prd);
});
app.put('/product/:id', function (req, res) {
    let prdIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    products[prdIndex].name = req.body.name;
    products[prdIndex].price = req.body.price;

    res.json(products[prdIndex]);
});
app.delete('/product/:id', function (req, res) {
    res.send("Delete Product with ID = " + parseInt(req.params.id));
});

app.listen(3000);