const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

function authMiddleware(req, res, next) {
    try {
  const token = req.headers.authorization?.split(' ')[1];
  console.log(token)

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

    const decoded = jwt.verify(token, secret);
    console.log("after decode --------",decoded)
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Invalid token.' });
  }
}

module.exports = authMiddleware;
