const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err,db) => {

if(err){
    return console.log('Unable to connect to MongoDB Server')
}

console.log('Connected to MongoDB Server');

db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('5b7bfc2f61313d6c267e0b24')
},
{
    $set: {
          location: 'Rajasthan'
    }
},
{
    returnOriginal: false
}).then((docs) => {

      console.log(docs);

}, (err) => {

    console.log('Unable to fetch Users',err);
    
});
});
