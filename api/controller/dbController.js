const fs = require('fs');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const dbFileName = 'userDB.json';

const userData = fs.readFileSync('../api/' + dbFileName,{ 
    encoding: 'utf8', 
    flag: 'r' 
});
const JSONUserData = JSON.parse(userData);

// check user
const checkUser = async (username, password) => {
    if(!username || !password) {
        throw Error('All fields must be filled')
    }
    const matchedUsers = JSONUserData.filter(user => {
        return user.userName == username
    });
    const user = matchedUsers[0];
    if(!user) {
        throw Error('Incorrect username')
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error('Incorrect password')
    }

    return user
};


// create user
const createUser =  (username, password) => {
    const matchedUsers = JSONUserData.filter(user => {
        return user.userName == username
    });
    
    if(matchedUsers[0]) {
        throw Error('Username is already exists');
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password.toString(), salt);
    const user = {
        "_id": crypto.randomBytes(8).toString("hex"),
        "userName": username, 
        "email": username + "@123.ru",
        "password": hash
    }
    JSONUserData.push(user);
    fs.writeFileSync('../api/' + dbFileName, JSON.stringify(JSONUserData));
    
    return user
    
};



module.exports = { checkUser, createUser };