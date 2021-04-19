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



// TAKE 2

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

// const Workout = require("./models/workouts");
const app = express();

app.use(logger("dev"));

// const db = mongojs("mongodb://Pythonidaer:xN9j8ysAqp-KMJb@pythonidaer-0-shard-00-00.xkfmm.mongodb.net:27017,pythonidaer-0-shard-00-01.xkfmm.mongodb.net:27017,pythonidaer-0-shard-00-02.xkfmm.mongodb.net:27017/tracker?ssl=true&replicaSet=atlas-u1mprq-shard-0&authSource=admin&retryWrites=true&w=majority", ["tracker"]);
// db.on("error", error => {
//     console.log("Database Error:", error);
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/tracker",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

app.post("/submit", ({ body }, res) => {
    Workout.create(body)
        .then(dbUser => {
            res.json(dbUser);
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});







// app.get("/", (req, res) => {
//     res.send("This Bootcamp Is Challenging");

// });

// app.get("/all", (req, res) => {
//     db.tracker.find({}, (err, docs) => {
//         // docs is an array of all the documents in mycollection
//         // console.log(docs);
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(docs);
//         }
//     })
// });

// app.get("/day", (req, res) => {
//     // Promisify in err probably write as Promises if needed
//     // But switching to Mongoose so fast will be promise based as we expect
//     db.tracker.find().sort({ day: -1 }, (err, found) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(found);
//         }
//     });
// });

// app.get("/oneday", (req, res) => {
//     db.tracker.find({ day: "Monday" }).sort({ day: -1 }, (err, found) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(found);
//         }
//     });
// });


// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
// });
