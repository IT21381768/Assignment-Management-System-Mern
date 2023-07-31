// var express = require('express');
// var fileUpload = require('express-fileupload');
// var bodyParser = require('body-parser');
// var assignmentRoutes = require('./routes/Assignment');
// var path = require('path');
// var cors = require('cors');


// var app = express();
// var mongoose = require('mongoose');

// var port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(cors());

// app.use(
//     bodyParser.urlencoded({
//         extended: false
//     })
// )

// app.use('/assignment', assignmentRoutes);

// //file upload 
// app.use(fileUpload());
// app.post('/upload', function(req, res) {
//     if (req.files === null){
//         return res.status(400).send('No files were uploaded.');
//     }
// const file = req.files.file;
// file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
//     if(err){
//         console.error(err);
//         res.status(500).send(err);
//     }
//     res.json({fileName: file.name, filePath: `/uploads/${file.name}`});
// });
// });

// var corsOptions = {
//     origin: '*',
//     optionsSuccessStatus: 200,
//     }

// app.use(cors(corsOptions));

// const mongoURI = 'mongodb+srv://minsandi:minsandi123@mernapp.cnpzawc.mongodb.net/';

// mongoose
// .connect(mongoURI, {useNewUrlParser: true})
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));

// var Users = require('./routes/Users');
//  app.use('/users', Users);
//  app.listen(port, function() {
//         console.log("Server is running on port: " + port);
//     }
// );



const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const assignmentRoutes = require('./routes/Assignment');
const Users = require('./routes/Users');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// File upload
app.use(fileUpload());
app.post('/upload', function (req, res) {
  if (!req.files || !req.files.file) {
    return res.status(400).send('No files were uploaded.');
  }
  const file = req.files.file;
  file.mv(path.join(__dirname, '/client/public/uploads', file.name), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

// Connect to MongoDB
const mongoURI = 'mongodb+srv://minsandi:minsandi123@mernapp.cnpzawc.mongodb.net/test?retryWrites=true&w=majority';
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Routes
app.use('/assignment', assignmentRoutes);
app.use('/users', Users);

app.listen(port, function () {
  console.log('Server is running on port: ' + port);
});
