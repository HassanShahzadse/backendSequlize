const User = require('../models/User');

function authUser (req,res,next){
    if(req.query.id == null){
        console.log(req.query.id)
        res.status(403)
        return res.send('You need to sin in in order to accesss this page')
    }
    next()
}

async function authRole(req,res,next) {
      try {
        const userId = req.query.id;
        console.log(userId,"----------------------------   ")
        const user = await User.findByPk(userId);
  
        if (!user || user.role !== 'admin') {
          res.status(401);
          return res.send('Not Allowed');
        }
  
        next();
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    
  }

module.exports = {
    authUser,
    authRole
}