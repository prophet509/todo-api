const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if (err) {
        return console.log("Unable to connect  to MongoDB server");
    }
    console.log("Connect database is successful");
    // const db  = client.db('Todos');
    // db.collection('Todos').insertOne({
    //     text :"Some thing to do",
    //     completed: false
    // }, (err,results) => {
    //     if(err){
    //         return console.log("Unable to insert db", err);
    //     }
    //     console.log(JSON.stringify(results,undefined,2));
    // });
    const db = client.db('TodoApp');
    db.collection('Users').insertOne({
        name:"Nam",
        age:15,
        location:"K7/26 duong nguyen phuoc chu"
    },(err,result) => {
        if(err){
            return console.log("Unable to insert the data");
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });
    client.close();
});