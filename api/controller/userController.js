const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, peocess.env.SECRET, { expiresIn: '3d'});
}

const { checkUser, createUser } = require('../controller/dbController');

// login user
const loginUser = async (req, res) => {
    res.json(checkUser('grisha', '4rfvRFV'));
};

// signup user
const signupUser = async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await createUser(username, password);
        res.status(200).json({username, user});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = { signupUser, loginUser };