const jwt = require('jsonwebtoken');
const config = require('config');

const auth = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'Not Authorized!' });
  }
  try {
    const decodedToken = jwt.verify(token, config.get('jwtSecret'));
    req.user = decodedToken.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
module.exports = auth;
