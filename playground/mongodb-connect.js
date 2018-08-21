const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db) => {

if(err){
    return console.log('Unable to connect to MongoDB Server')
}

console.log('Connected to MongoDB Server');

db.collection('Users').insertOne({
    name: 'Neha',
    age: 26,
    location: 'Gurugram'
}, (err, result) => {
   if(err){
       return console.log('Unable to insert in Users',err);
   }

   console.log(JSON.stringify(result.ops, undefined, 3));

   });

   db.close();

});

