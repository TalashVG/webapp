const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.listen(1000);

app.get('*/', function(req, res) {
    console.log("/post*")
    var g = "hello"
    res.send(req.url + `${g}`);
})