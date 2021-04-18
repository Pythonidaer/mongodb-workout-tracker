  
// imports our connections
const mongoose = require('mongoose');
// imports our 3 model object files
const { Workout } = require('../models');
// imports express' router object
const router = require('express').Router();
// Import path module for handling and transforming file paths
const path = require('path');

// if login button is clicked, redirect to login handlebars page
// if on route and user is logged in, redirect to home page
router.get('/exercise', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    // res.redirect('/');
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
    // res.render('login');
});

// same as our login page, except signup counts as a login
// router.get('/signup', (req, res) => {
//     res.render('signup');
// });

module.exports = router;