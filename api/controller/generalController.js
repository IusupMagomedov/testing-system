const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' });
}

const { checkUser, createUser, findOne } = require('../controller/dbController');

// show greetings
const showGreetings = (req, res) => {
    res.status(200).json({
        title: "Программа для тестирования", 
        text: "Для продолжения Вы должны быть авторизованы системой. Если у Вас нет учетной записи, перейдите на страницу регистрации."
    })
}

// show preferences
const showInitials = async (req, res) => {
    console.log(req.body)
    const { username } = req.body;
    try {
        const user = await findOne(username);
        res.status(200).json({
            title: `Вы зарегистрированы как ${username}`, 
            text: "Выбрите дисциплину и нажмите START."
        })
    } catch (error) {
        res.status(400).json({'error' : error.message});
    }
}

module.exports = { showGreetings, showInitials };