const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  // day prop
  // exercise - array of exerces
  // -- type
  // -- name
  // -- duraction
  // -- weight reps sets distance
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    duration: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    distance: {
      type: Number,
    }
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;



/*
REMINDER:
tables = collections, rows = documents, columns = fields

db.tracker.insert({"day": "Monday", "exercises": ["bench", "extensions", "contractions"]})

*/
