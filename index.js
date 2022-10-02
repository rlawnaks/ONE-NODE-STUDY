const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    api = require(`./api`);
    
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', api)

app.get('/', (req, res) => {
    res.json({ result: true })
})

const port = 8000;
app.listen(port, () => {
    console.log(`SERVER ON! PORT : ${port}`)
})