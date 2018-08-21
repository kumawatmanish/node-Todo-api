const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db) => {

if(err){
    return console.log('Unable to connect to MongoDB Server')
}

console.log('Connected to MongoDB Server');

db.collection('Users').find({name: 'Neha'}).toArray().then((docs) => {

      console.log('Users Document(s)');
      console.log(JSON.stringify(docs, undefined, 3));

}, (err) => {

    console.log('Unable to fetch Users',err);
    
});
});
