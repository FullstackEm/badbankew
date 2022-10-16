const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://emdest28:D1e2s3t4@badbank.kyxz7vw.mongodb.net/?retryWrites=true&w=majority";
let db = null

// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {

    if(err){
        console.log("Failed to connect " + err);
    }else{
        console.log("Connected successfully to db server");

        // connect to myproject database
        db = client.db('myproject');
    }
   
});

// create user account
function create(name, email, password){
    return new Promise((resolve, reject) => {
        const collection = db.collection('users')
        const doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
}
// deposit
function create(email, amount){
    const collection = db.collection('users')
    const doc = {name, email, password, balance: };
    collection.insertOne(doc, {w:1}, function(err, result) {
        err ? reject(err) : resolve (doc);
    })l
}

//
//all users
function all (){
    return new Promise((resolve, reject) => {
        const customers = db
        .collection('users')
        .find({})
        .toArray(function(err, docs) {
            err ? reject(err) : resolve(docs);
        });
    })
}

module.exports = {create, all};