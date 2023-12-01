const fs = require('fs');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const dbFileName = 'userDB.json';
let userData;

try {
    userData = fs.readFileSync(dbFileName, { 
        encoding: 'utf8', 
        flag: 'r' 
    });
} catch (error) {
    if (error.message.includes('no such file')) {
        fs.writeFileSync(dbFileName, '[]');
    } else {
        console.log(error);
    }
}


 

// find one

const findOne = async username => {
    const JSONUserData = JSON.parse(userData);
    const matchedUsers = JSONUserData.filter(user => {
        return user.username == username
    });
    console.log(matchedUsers)
    const user = matchedUsers[0];
    if(!user) {
        throw Error('Username not found')
    }
    return user;
}

const findId = async _id => {
    const JSONUserData = JSON.parse(userData);
    const matchedUsers = JSONUserData.filter(user => {
        return user._id == _id
    });
    const user = matchedUsers[0];
    if(!user) {
        throw Error('Username not found')
    }
    return user;
}


// check user
const checkUser = async (username, password) => {
    if(!username || !password) {
        throw Error('All fields must be filled')
    }
    const user = await findOne(username);
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Incorrect password')
    }
    return user;
};


// create user
const createUser =  (username, password) => {
    const JSONUserData = JSON.parse(userData);
    const matchedUsers = JSONUserData.filter(user => {
        return user.username == username
    });
    
    if(matchedUsers[0]) {
        throw Error('Username is already exists');
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password.toString(), salt);
    const user = {
        "_id": crypto.randomBytes(8).toString("hex"),
        "username": username, 
        "email": username + "@123.ru",
        "password": hash
    }
    JSONUserData.push(user);
    fs.writeFileSync(dbFileName, JSON.stringify(JSONUserData));
    
    return user
    
}; 



module.exports = { checkUser, createUser, findOne, findId };