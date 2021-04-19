// path is a node module used for handling and transforming file paths.
const path = require('path');
// express web app framework let's us structure and handle numerous http requests at specific urls.
const express = require('express');
// imports the routes we created with express
const routes = require('./controllers');
const logger = require("morgan");
// const mongojs = require("mongojs");
const mongoose = require('mongoose');
require('dotenv').config();
// const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

// still no idea what this does, no time to figure out logging
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// redirect our pages
app.use(express.static("public"));

// Connect to our MONGODB_URI or localhost
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/tracker",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// use our express routes
app.use(routes);

// listen to PORT 3000 at least on local, probably shows 5 digits on Mongo/Heroku setup
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});