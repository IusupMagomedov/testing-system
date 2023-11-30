const fs = require('fs');
const dbFileName = 'userDB.json';
const userData = fs.readFileSync('../api/' + dbFileName,{ 
    encoding: 'utf8', 
    flag: 'r' 
});
const JSONUserData = JSON.parse(userData);

const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    // verify authentication
    const { authorization } = req.headers;
    if(!authorization) {
        return res.status(401).json({error: 'Authorization token required!'})
    }

    const token = authorization.split(' ')[1];

    try {
        const {_id} = jwt.verify(token, process.env.SECRET);

        const matchedUsers = JSONUserData.filter(user => {
            return user.userName == username
        });
        const user = matchedUsers[0];
        req.user = user._id;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'Request is not aothorized'});
    }

}

module.exports = requireAuth;