const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if (err) {
        return console.log("Unable to connect  to MongoDB server");
    }
    console.log("Connect database is successful");
    const db  = client.db('TodoApp');
    db.collection('Todos').find({completed:false}).toArray().then((docs) => {
        console.log("Successful to fetch the data");
        console.log(JSON.stringify(docs,undefined,2));
    }).catch((err) => {
        console.log("Unable to fetch the data");
    });
    
    client.close();
});