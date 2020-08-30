var express = require('express')
var router = express.Router()


let categories = [
    { id: 1, title: "Sports" },
    { id: 2, title: "Politcs" },
    { id: 3, title: "Drama" },
    { id: 4, title: "Programming" },
];



router.get('/', function (req, res) {
    res.json(categories);
})
router.get('/:id', function (req, res) {
    res.json(categories.find(c => c.id == req.params.id));
})
router.post('/', function (req, res) {
    let category = {
        id: categories.length + 1,
        title: req.body.title,
    };

    books.push(category);
    res.json(category);
})
router.put('/:id', function (req, res) {
    let category_index = categories.findIndex(c => c.id === parseInt(req.params.id));
    categories[category_index].title = req.body.title;

    res.json(categories[category_index]);
})
router.delete('/:id', function (req, res) {
    let category_index = books.findIndex(c => c.id === parseInt(req.params.id));
    delete categories[category_index];
    res.json("Done");
})


module.exports = router