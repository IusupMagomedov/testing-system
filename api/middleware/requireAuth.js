const { findId } = require('../controller/dbController');
const jwt = require('jsonwebtoken');

const requireAuth = async (req, res, next) => {
    // verify authentication
    const { authorization } = req.headers;
    if(!authorization) {
        return res.status(401).json({error: 'Authorization token required!'})
    }

    const token = authorization.split(' ')[1];

    try {
        const {_id} = jwt.verify(token, process.env.SECRET);

        
        req.user = await findId(_id);
        next();

    } catch (error) {
        console.log(error.message);
        res.status(401).json({error: 'Request is not aothorized'});
    }

}

module.exports = requireAuth;