const express = require('express');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();


//controller functions
const { showGreetings, showInitials } = require('../controller/generalController')

// login route
router.get('/greetings', showGreetings);



// authorized only
router.use(requireAuth);

// user preferences
router.post('/initials', showInitials);





module.exports = router;