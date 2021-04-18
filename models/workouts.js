const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    // day prop
    // exercise - array of exerces
    // -- type
    // -- name
    // -- duraction
    // -- weight reps sets distance
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Transaction = mongoose.model("Transaction", transactionSchema);

// module.exports = Transaction;

/*
REMINDER:
tables = collections, rows = documents, columns = fields

db.tracker.insert({"day": "Monday", "exercises": ["bench", "extensions", "contractions"]})

*/
