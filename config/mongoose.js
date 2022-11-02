const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employee')

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error in connecting to database"));

db.once('open',function(){
    console.log('Successfully connected to database : Mongodb');
})

module.exports = db;