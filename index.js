const express = require('express');
const mongoose = require('mongoose');
const app = express();
const keys = require('./config/keys');

const User = require('./models/User');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.use (express.urlencoded({extended: true}));
app.use(express.json());

app.post("/register", async(req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({
        message: "Form data received"
    })
})

app.get('/registered', (req, res)=>{
    console.log("loading registered")
    res.status(200).json({
    message: 'User registered',
    user: 'new user'
    })
    })


const PORT = process.env.PORT || 5000;
app.listen(PORT);