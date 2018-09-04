const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {ToDo} = require('./model/todo');

var {User} = require('./model/user'); 

var app = express();

var port = process.env.PORT || 8888;

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

app.get('/todos', (req, res) => {
    ToDo.find().then((todos) => {
        res.send({todos}),
        (e) => {
            res.status(400).send(e);
        }
    });
});
app.listen(port, () => {
    console.log('Server started up on port', port);
});

module.exports = {app};