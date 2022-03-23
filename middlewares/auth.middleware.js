const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  
  try {
    const bearer = req.get('Authorization');
    if(!bearer) {
      const error = new Error('token not found');
      error.status = 400;
      throw error;
    }
    const token = bearer.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = {...decodedToken};
    next();
  } catch (error) {
    res.status(error.status || 401).json(error.message);
  }

}

module.exports = auth;