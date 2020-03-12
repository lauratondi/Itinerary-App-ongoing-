const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const userModel = require('../model/userModel');
const keys = require('../keys')


router.post('/', (req, res) => {
    console.log(req.body)
    const { email, password, username } = JSON.parse(Object.keys(req.body)[0]);
    // Simple validation
    if (!email || !password) {
        return res.status(405).json({ msg: 'Please enter the fields' })
    }
    // check if the user already exists
    userModel.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists!' })

            const newUser = new userModel({
                email,
                password,
                username
            });

            // Create salt & hash

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            // payload with a token that expires in 1 hour
                            jwt.sign(
                                { id: user.id },
                                keys.jwtSecret,
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            email: user.email,
                                            username: user.username
                                        }
                                    });
                                }
                            )

                        })
                })
            })
        });
});

module.exports = router