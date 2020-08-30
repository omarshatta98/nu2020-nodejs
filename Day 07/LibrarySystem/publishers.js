var express = require('express')
var router = express.Router()


let publishers = [
    { id: 1, name: "Omar Shatta", age: 22 },
    { id: 2, name: "Taha hussin", age: 70 },
    { id: 3, name: "Abbas Alakad", age: 65 }
];



router.get('/', function (req, res) {
    res.json(publishers);
})
router.get('/:id', function (req, res) {
    res.json(publishers.find(b => b.isbn == req.params.isbn));
})
router.post('/', function (req, res) {
    let publisher = {
        id: publishers.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    books.push(publisher);
    res.json(publisher);
})
router.put('/:id', function (req, res) {
    let publisher_index = books.findIndex(b => b.isbn === parseInt(req.params.isbn));
    publishers[publisher_index].name = req.body.name;
    publishers[publisher_index].age = req.body.age;

    res.json(publishers[publisher_index]);
})
router.delete('/:id', function (req, res) {
    let publisher_index = books.findIndex(b => b.isbn === parseInt(req.params.isbn));
    delete publishers[publisher_index];
    res.json("Done");
})


module.exports = router