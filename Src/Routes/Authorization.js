const expres = require('express');
const verifytoken=require('../Middleware/Authmiddleware');
const authorizedRole=require('../Middleware/RoleBasedMiddleware');
const Router = expres.Router();
Router.get('/admin', verifytoken,authorizedRole("admin"),(req, res) => {
    res.status(200).send("welcome admin")
});
Router.get('/users', verifytoken,authorizedRole("admin","user","manager"),(req, res) => {
    res.status(200).send("welcome users")
});
Router.get('/managers', verifytoken,authorizedRole("admin","manager"),(req, res) => {
    res.status(200).send("welcome managers")
});
module.exports=Router;