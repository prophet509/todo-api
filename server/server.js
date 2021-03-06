const  express = require('express');
const  bodyParser = require('body-parser');

var {ObjectId} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res) => {
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
      }, (e) => {
        res.status(400).send(e);
      });
});

app.get('/todos', (req,res) => {
    Todo.find().then((todos) => {
        res.send(todos);
    },(e) => {
        res.status(400).send(e);
    });
});
app.get('/todos/:id',(req,res) => {
    var id= req.params.id;
    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send(todo);
    },(e) => {
        res.status(404).send();
    });
})

app.get('/',(req,res) => {
    console.log("Da chay");
    res.send("aasdfasdf");
});

app.listen(3000,() => {
    console.log("Server is begin at",3000);
});

module.exports = {
    app
};
