const express = require('express');// requiring express, 
const port = 8800;
const bodyParser = require('body-parser');


const db = require('./API/v1/config/mongoose');

// initializing my app
const app = express();

//it will parse the upcoming request to String or Arrays.
app.use(bodyParser.urlencoded({extended: true}));


app.use('/products', require('./API/v1/routes/products'));

app.listen(port, function(err){
    if(err){
        console.log("Error in running the app.");
        return ;
    }
    console.log("Server is up and running at port ", + port);
});
