var {mongoose} = require('./../server/db/mongoose');
var {ToDo} = require('./../server/model/todo');
var {User} = require('./../server/model/user');
 
var id = '5b7e6bad1d00205c3a714a10';

User.findById(id).then((user) => {

    if(!user){
        return console.log('User not found');
    }
    console.log('User',user);
});