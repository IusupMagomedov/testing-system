const fs = require('fs');
const bcrypt = require('bcrypt');


const dbFileName = 'userDB.json';

const userData = fs.readFileSync('../api/' + dbFileName,{ 
    encoding: 'utf8', 
    flag: 'r' 
});
const JSONUserData = JSON.parse(userData);

// check user
const checkUser =  (login, password) => {
    const matchedUser = JSONUserData.filter(user => {
        return user.userName == login
    });
    if(matchedUser[0]) {
        if(bcrypt.compareSync(matchedUser[0].password, password)) {
            return {"message": "login and password are correct"};
        }
        return {"message": "login is correct"};
    }
    return {"message": "login is incorrect"}
};


// create user
const createUser =  (username, password) => {
    if (checkUser(username, password).message === "login is incorrect") {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password.toString(), salt);
        const user = {
            "userName": username, 
            "email": username + "@123.ru",
            "password": hash
        }
        JSONUserData.push(user);
        fs.writeFileSync('../api/' + dbFileName, JSON.stringify(JSONUserData));
        const idArray = JSONUserData.filter((element, index) => {
            (element.username === username) && index
        });
        const _id = idArray[0];
        return {
            _id,
            username,
            hash
        }
    } else {
        throw Error('Username is already exists')
    }
};



module.exports = { checkUser, createUser };