const express = require('express');
const mongojs = require("mongojs");
const mongoose = require('mongoose');
require('dotenv').config();
// const logger = require("morgan");
// const path = require("path");
// app.use(logger("dev"));

const app = express();


// const db = mongojs("mongodb://Pythonidaer:xN9j8ysAqp-KMJb@pythonidaer-0-shard-00-00.xkfmm.mongodb.net:27017,pythonidaer-0-shard-00-01.xkfmm.mongodb.net:27017,pythonidaer-0-shard-00-02.xkfmm.mongodb.net:27017/tracker?ssl=true&replicaSet=atlas-u1mprq-shard-0&authSource=admin&retryWrites=true&w=majority", ["tracker"]);
// db.on("error", error => {
//     console.log("Database Error:", error);
// });

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/tracker',
    // process.env.MONGODB_URI || db,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


const PORT = process.env.PORT || 3000;



app.get("/", (req, res) => {
    res.send("This Bootcamp Is Challenging");

});

app.get("/all", (req, res) => {
    db.tracker.find({}, (err, docs) => {
        // docs is an array of all the documents in mycollection
        // console.log(docs);
        if (err) {
            console.log(err);
        } else {
            res.json(docs);
        }
    })
});

app.get("/day", (req, res) => {
    // Promisify in err probably write as Promises if needed
    // But switching to Mongoose so fast will be promise based as we expect
    db.tracker.find().sort({ day: -1 }, (err, found) => {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
        }
    });
});

app.get("/oneday", (req, res) => {
    db.tracker.find({ day: "Monday" }).sort({ day: -1 }, (err, found) => {
        if (err) {
            console.log(err);
        } else {
            res.json(found);
        }
    });
});


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
