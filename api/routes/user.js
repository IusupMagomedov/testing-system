const express = require('express');

const router = express.Router();


//controller functions
const { signupUser, loginUser, showPreferences } = require('../controller/userController')

// login route
router.post('/login', loginUser);


// signup route
router.post('/signup', signupUser);


// authorized only


// user preferences

router.get('/preferences', showPreferences);




module.exports = router;