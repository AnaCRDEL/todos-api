const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const User = require("../models/User");

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("all fields are required");
    }

    const user = await User.findOne({ email });
    if (user) {
      throw new Error("e-mail already exists");
    }

    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await User.create({
      name,
      email,
      passwordHash: hash,
    });

    res.status(201).json({ user: newUser.name, email: newUser.email });
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFromDB = await User.findOne({email});
    if (!userFromDB) {
      throw new Error('invalid username or password');
    }
    const verifiedHash = bcrypt.compareSync(password, userFromDB.passwordHash)
    if(!verifiedHash) {
      throw new Error('invalid username or password');
    }
    
    const payload = {
      id: userFromDB._id,
      name: userFromDB.name,
      email,
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.status(200).json({user: payload, token});

  } catch (error) {
    res.status(500).json(error.message)
  }
})

module.exports = router;
