const express = require('express')
const path = require('path')

const app = express()

const APP_DIR = path.join(__dirname, 'client/build')

app.use(express.static(APP_DIR))

app.get('/api/v1/list', (req, res) => {
    let list = ['apple', 'banana', 'melon']
    res.json(list)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('App is listening on port' + PORT)
})