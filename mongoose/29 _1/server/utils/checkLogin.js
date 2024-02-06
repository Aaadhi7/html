const jwt = require('jsonwebtoken');
const User = require('./models/User'); 
const checkLogin = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token || token === 'undefined' || token === 'null') {
        return res.status(401).json({ message: 'Token not provided' });
    }

    jwt.verify(token, 'your_secret_key', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        } else {
            const userId = decoded.user_id;

            
            User.findById(userId, (err, user) => {
                if (err || !user) {
                    return res.status(404).json({ message: 'User not found' });
                } else {
                    req.userId = userId; 
                    next();
                }
            });
        }
    });
};

module.exports = checkLogin;