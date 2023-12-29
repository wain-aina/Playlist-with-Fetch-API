const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const app = express();

const createSong = require('./routes/createSong');
const deleteSong = require('./routes/deleteSong');
const getSong = require('./routes/getSongs');
const searchSong = require('./routes/searchSong');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/PlaylistDBAJAX", {useNewUrlParser: true});

app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cookieParser('playMe', {maxAge:60*1000*15}));
app.use(session({secret:"songs", resave:false, saveUninitialized:false}));

app.use('/', getSong)
app.use('/', createSong)
app.use('/', searchSong)
app.use('/', deleteSong)

app.get("/", (req, res) =>{
    console.log(req.cookies)
    let options = {
        maxAge: 1000 * 60 * 15, // would expire after 15 minutes
        httpsOnly: true, // The cookie only accessible by the web server
        httpOnly: true, // The cookie only accessible by the web server
        signed: true, // Indicates if the cookie should be signed
        secure: true,
        sameSite: 'lax'
    }

    // Set cookie
    res.cookie('cookieName', 'cookieValue', options) // options is optional
    res.render("landing");
});


app.listen(3000, () => {
    console.log("Server started on port 3000");
});

