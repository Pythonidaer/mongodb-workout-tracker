const router = require('express').Router();
// const db = require('.../models');
// const path = require("path");


const workoutRoutes = require('./workouts.js');

router.use('/', workoutRoutes);

module.exports = router;