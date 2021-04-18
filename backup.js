const express = require('express');
const mongojs = require("mongojs");
// const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();
// PRACTICE START
// const db = mongojs("mongodb://[Pythonidaer:xN9j8ysAqp-KMJb@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]")

// const db = mongojs("mongodb://Pythonidaer:xN9j8ysAqp-KMJb@pythonidaer-0-shard-00-00.xkfmm.mongodb.net:27017,pythonidaer-0-shard-00-01.xkfmm.mongodb.net:27017,pythonidaer-0-shard-00-02.xkfmm.mongodb.net:27017/tracker", "tracker");
// db.on("error", error => {
//     console.log("Database Error:", error);
// });

// const db = mongojs("mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017/?authSource=admin")

const collections = ["tracker"];

const db = mongojs("Pythonidaer:0nKLfOkZ6bZizaLP@pythonidaer-0.xkfmm.mongodb.net/potato", collections);
db.on("error", error => {
    console.log("Database Error:", error);
});


app.get("/", (req, res) => {
    res.send("Hello world");
  });

// PRACTICE END

app.get("/all", (req, res) => {
    db.tracker.find({}, (err, found) => {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
        }
    });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static("public"));

// app.get('/', function (req, res) {
//   res.send('Hello World')
// }) 

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//     useNewUrlParser: true,
//     useFindAndModify: false
// });

// routes
// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
