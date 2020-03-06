// Back-end framework
const express = require('express');

// Initialize Express in to a variable called app
const app = express();


const bodyParser = require('body-parser');
const cors = require('cors');

// For deployemnt
const path = require('path');
// 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.static(path.join(__dirname, 'client', 'build')));

// We create a variable for the port to be able to run the server
const port = process.env.PORT || 5000;





// DB configuration and interaction with our MongoDb database
const db = require('./keys').mongoURI;
const mongoose = require('mongoose')

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('Connection to Mongo DB estabilished'))
    .catch(err => console.log(err));



app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'))
app.use('/user', require('./routes/user'))
app.use('/login', require('./routes/login'));


// ADDING HEROKU
// Serve static assets if in production
// if (process.env.NODE_ENV === 'production') {
//     // Set static folder

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// We want our app listen to that port
app.listen(port, () => {
    console.log("Server is running on " + port + " port");
});

// }
