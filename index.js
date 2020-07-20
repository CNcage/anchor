const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const users = require("./routes/api/users");


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({extended: false})
);
app.use(bodyParser.json());

// DB Config
const keys = require('./config/keys');

// Passport middleware
app.use(passport.initialize());
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

// Connect to MongoDB
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));;

// App listen
const PORT = process.env.PORT || 5000; 
app.listen(PORT)




if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res)=> {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}