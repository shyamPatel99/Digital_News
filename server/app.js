const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/news_data'

var path = require('path');
var bodyParser = require('body-parser');


const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())
app.use(bodyParser.json())

// const alienRouter = require('./routes/aliens')
// app.use('/aliens',alienRouter)







// var MongoClient = require('mongodb').MongoClient
// var db;
//mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
//Establish Connection
// console.log('jinda hu me');
// MongoClient.connect('mongodb://localhost:27017/news/', function (err, database) {
//     console.log('yoooooooooooooooo');
//    if (err) {
//     console.log('Aw Noooooo');
//    	throw err;
//    }
//    else
//    {
// 	db = database;
// 	console.log('Connected to MongoDB');
// 	//Start app only after connection is ready
// 	//app.listen(9000);
//    }
// });



// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '/myfile.html'));
// });

// app.post('/', function(req, res) {
//    // Insert JSON straight into MongoDB
//   db.collection('employees').insert(req.body, function (err, result) {
//       if (err)
//          res.send('Error');
//       else
//         res.send('Success');

//   });
// });

app.listen(9000, () => {
    console.log('Server started')
})

