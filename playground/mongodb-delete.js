const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db) => {

if(err){
    return console.log('Unable to connect to MongoDB Server')
}

console.log('Connected to MongoDB Server');

db.collection('Users').findOneAndDelete({name: 'Manish'}).then((docs) => {

      console.log(docs);

}, (err) => {

    console.log('Unable to fetch Users',err);
    
});
});
