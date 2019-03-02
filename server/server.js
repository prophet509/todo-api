const  express = require('express');
const  bodyParser = require('body-parser');


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
        next();
    },(err) => {
        res.status(400).send(e);
    });
});
app.get('/',(req,res) => {
    console.log("Da chay");
    res.send("aasdfasdf");
});
app.listen(3000,() => {
    console.log("Server is begin at",3000);
});