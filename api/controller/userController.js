const { checkUser, createUser } = require('../controller/dbController');

// login user
const loginUser = async (req, res) => {
    res.json(checkUser('vanya', '1qazQAZ'));
};

// signup user
const signupUser = async (req, res) => {
    createUser('misha', '3edcEDC');
    res.json({message: 'signup user'})
};


module.exports = { signupUser, loginUser };