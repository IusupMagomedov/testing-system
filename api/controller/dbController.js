const fs = require('fs');

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
        if(matchedUser[0].password === password) {
            return {"message": "login and password are correct"};
        }
        return {"message": "login is correct"};
    }
    return {"message": "login is incorrect"}
};


// create user
const createUser =  (login, password) => {
    if (checkUser(login, password).message === "login is incorrect") {
        JSONUserData.push({
            "userName": login, 
            "email": login + "@123.ru",
            "password": password
        })

        // let data = "This is a file containing a collection"
        //         + " of programming languages.\n"
        // + "1. C\n2. C++\n3. Python";
        
        fs.writeFileSync('../api/' + dbFileName, JSON.stringify(JSONUserData));
        // console.log("File written successfully\n");
        // console.log("The written has the following contents:");
        // console.log(fs.readFileSync("programming.txt", "utf8"));
    }
};



module.exports = { checkUser, createUser };