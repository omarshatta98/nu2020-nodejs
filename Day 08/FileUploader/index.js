const express = require('express');
const fileupload = require('express-fileupload');

var app = express();
app.use(fileupload());


app.post("/upload", function (req, res, next) {
    const file = req.files.photo;
    file.mv('./Day 08/FileUploader/uploads/' + file.name, function (err, result) {
        if (err)
            throw err;
        res.send({
            success: true,
            message: "File uploaded!"
        });
    })
})

app.listen(3000);
