const jwt = require('jsonwebtoken');
const verifytoken = (req, res, next) => {
    try {
        const authheader = req.headers["authorization"];
        const token = authheader.split(" ")[1];
        
      
        if (!token) {
            return res.send("no token")
        }
        const verifytoken = jwt.verify(token, process.env.payload);
        if (!verifytoken) {
            return res.send("this not the token of the user")
        }
        req.user=verifytoken;
         next()
    }
   
    catch (error) {
       res.status(500).json({ message: error.message });
    }


}
module.exports = verifytoken;