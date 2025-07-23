const bcrypt = require('bcryptjs');
const users = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const register = async (req,res) => {
    const { username, password, role } = req.body;
    try {
        const hashpassword = await bcrypt.hashSync(password, 10);
        const user = await users.create({ username, password: hashpassword, role });
        res.status(200).send(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const findname = await users.findOne({ username });
        if (!findname) {
            return res.status(404).send("we cant find username please register");
        }
        const checkpassword = await bcrypt.compare(password, findname.password);
        if (!checkpassword) {
            return res.status(404).send("verify your password");
        }

        var token = jwt.sign({name:findname.username,role:findname.role},tokenjwt65446554665, { expiresIn: '1h' });
        res.status(200).send(token);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { register, login };