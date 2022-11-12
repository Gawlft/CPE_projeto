const express = require("express");
const routes = express.Router();

users = [];

routes.get('/users', (req, res) => {
    res.json(users);
});

routes.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json({message: "User created"});
});


module.exports = routes;