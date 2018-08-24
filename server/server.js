const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {ToDo} = require('./model/todo');

var {User} = require('./model/user'); 

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

    var todo = new ToDo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
} );


app.listen(8888, () => {
    console.log('Server started on port 8888');
});