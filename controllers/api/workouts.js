// const Workout = require(".../models/workout")
// const { Workout } = require(".../models/workouts")
const { Workout } = require('../../models');
// imports express' router object
const router = require('express').Router();

router.get("/workouts", (req,res) => {  
    Workout.find()
    .then(data =>{  
        res.json(data)
    })
    .catch(err => { 
        res.json(err)
    })
});

router.post("/workouts", (req, res) => {
    Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
});

router.get("/workouts/range", (req, res) => {
    Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});

router.post("/workouts/range", (req, res) => {
    Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
});

// destructure the body and params
router.put("/workouts/:id", ({ body, params }, res) => {
    // console.log(body);
    // body is this:
    // {
    //     type: 'resistance',
    //     name: 'Swimming',
    //     weight: 2000,
    //     sets: 1,
    //     reps: 1,
    //     duration: 1
    //   }
    // console.log(params);
    // params is this:
    // { id: '607ce6017c54054278c454de' }
    // if model the _id value to query by
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        })
});

module.exports = router;



// app.get("/oneday", (req, res) => {
//     db.tracker.find({ day: "Monday" }).sort({ day: -1 }, (err, found) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(found);
//         }
//     });
// });