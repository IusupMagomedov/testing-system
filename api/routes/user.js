const express = require('express');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();


//controller functions
const { signupUser, loginUser, showPreferences } = require('../controller/userController')

// login route
router.post('/login', loginUser);


// signup route
router.post('/signup', signupUser);


// authorized only
router.use(requireAuth);

// user preferences
router.get('/preferences', showPreferences);





module.exports = router;