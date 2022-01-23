'use strict';

const express = require('express')
const app = express();
const fs = require('fs');

fs.readFile('./data/resumeData.json', (err, data) => {
    if (err) throw err;
    const resume = JSON.parse(data);
    console.log(resume);
});

app.get('/', (req, res) => {
    res.send('Root')
});

app.get('/api/resume', async (req, res) => {
    res.send(await resume)
});

app.get('/api/resume/:id', (req, res) => {
    res.send(`userID is : ${req.params.id}`)
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})