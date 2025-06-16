const express = require('express');
const app = express();
const port = process.env.Port || 7000;
const Dbconnect = require('./Config/db.connect');
const userroute = require('./Routes/Authentification');
const accessroute=require('./Routes/Authorization')
app.use(express.json());
app.use('/user',userroute);
app.use('/access',accessroute);
Dbconnect();
app.listen(port, () => {
    console.log(`server is connecting ${port}`)
});