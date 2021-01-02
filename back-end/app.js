const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const data = require('./data')


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => {
    console.log('Server running port 3000');
})


app.post('/enroll', function(req, res){
    console.log(req.body);
    console.log(req.body.userEmail)
    res.status(200).send({"message": "Data received"});
    data.getData(req.body.userEmail)
})

app.post('/form', function(req, res){
    console.log(req.body);
    res.status(200).send({"message": "Form received"});
})


app.get('/', (req, res) => {
    res.send("This Server is running in PORT 3000");
})