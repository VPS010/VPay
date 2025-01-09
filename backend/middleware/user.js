const jwt = require('jsonwebtoken');
const Jwt_KEY = process.env.JWT_KEY;


const UserAuth = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            msg: "Authorization Header not present"
        })
    }

    const token = authHeader.split(' ')[1];
    try {

        const decoded = jwt.verify(token, Jwt_KEY);
        if (decoded.username) {
            req.userId = decoded.userId;
            console.log(decoded);
            next();
        }
    } catch (e) {
        console.log(e);
    }

}

module.exports = UserAuth