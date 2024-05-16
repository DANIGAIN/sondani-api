const CustomError = require('../utils/Error');
const {getUser} = require('./../v1/services/auth.service')

const adminMiddleware = async(req, res, next) => {
     const {token}  = req.cookies;
     if(!token){
          return res.status(401).json(CustomError.unauthorizeError({message:"unauthorize !User can not login"}))
     }
     const user = await getUser(token);
     if(user.role != 0){
          return res.status(403).json(CustomError.unauthorizeError({message:"Forbedden! your role can not allow access !."}))
     }
     next();
}
const userMiddleware = async(req, res, next) => {
     const {token}  = req.cookies;
     const user = await getUser(token);
     if(!req.body.uid){
          req.body.uid = user.id
     }
     if(!token){
          return res.status(401).json(CustomError.unauthorizeError({message:"unauthorize !User can not login"}));
     }
     
     next();
}

const checkAppRoleMiddleware = async(req, res, next) => {
     const {token}  = req.cookies;
     const user = await getUser(token);
     if(!req.body.patientId){
          req.body.patientId = user.id
     }
     if(!token){
          return res.status(401).json(CustomError.unauthorizeError({message:"unauthorize !User can not login"}));
     }
     if(user.role == 0 || req.body?.patientId === user.id){
          next();
     }
     return res.status(403).json(CustomError.forbiddenError({message:"forbidden !User can not permited"}));

} 

module.exports = {
     adminMiddleware, 
     userMiddleware,
     checkAppRoleMiddleware
} ;  