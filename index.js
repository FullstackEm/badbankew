require("dotenv").config();
const path = require("path");
var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js'); // add the package connecting to mongodb
const e = require('express');

// used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {

    // check if account exists
    dal.find(req.params.email).
        then((users) => {

            // if user exists, return error message
            if(users.length > 0){
                console.log('User already in exists');
                res.send('User already in exists');    
            }
            else{
                // else create user
                dal.create(req.params.name,req.params.email,req.params.password).
                    then((user) => {
                        console.log(user);
                        res.send(user);            
                    });            
            }

        });
});


// login user 
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        emai:   req.params.email,
        password: req.params.password
    });
});
  
    // find user account
app.get('/account/find/:email', function (req, res) {

    dal.find(req.params.email).
        then((user) => {
            console.log(user);
            res.send(user);
    });
});

// find one user by email - alternative to find
app.get('/account/findOne/:email', function (req, res) {

    dal.findOne(req.params.email).
        then((user) => {
            console.log(user);
            res.send(user);
    });
});


// update - deposit/withdraw amount
app.get('/account/update/:email/:amount', function (req, res) {

    var amount = Number(req.params.amount);

    dal.update(req.params.email, amount).
        then((response) => {
            console.log(response);
            res.send(response);
    });    
});

// all accounts
app.get('/account/all', function (req, res) {

    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
    });
});
if (process.env.NODE_ENV === "production") {
    app.use(express.static("/public"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname,"public", "index.html"));
    })
}

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});