const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const dotenv = require('dotenv');

dotenv.config();
router.post('/register', async (req, res)=> {
    const { email, password ,role} = req.body;
    try {
        const user = new User({ email, password ,role});
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
});

router.post('/login', async (req, res)=>{
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });  
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ message: 'Invalid email or password' });
        }  
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
          expiresIn: '1h'
        }); 

          res.json({ token });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
});

module.exports = router;