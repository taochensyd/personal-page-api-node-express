const express = require('express')
const app = express();

app.get('/api/resume', (req, res) => {
    res.send('Resume Detail')
});

app.get('/api/resume/:id', (req, res) => {
    res.send(`userID is : ${req.params.id}`)
});