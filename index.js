const express = require('express')();
const app = express;
const cors = require('cors')
const port = 5000;

const categories = require('./data/Categories.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('This is dragon Api data is coming')
})


app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Running Api on ${port}`)
})