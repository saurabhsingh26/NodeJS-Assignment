// ****************  Saurabh Singh ****************

const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');


app.use(express.urlencoded());

app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server ${err}`);
        return;
    }
    console.log(`Server is running successfully at port ${port}`);
})