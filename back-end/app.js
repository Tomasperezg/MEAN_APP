const express = require('express');
require('./db/mongoose')
const User = require('./model/user')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 8000
app.use(express.json())
app.use(cors())


app.post('/enroll', (req, res) => {

    const user = new User(req.body)

    user.save().then(() => {
        res.status(200).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// app.post('/form', function(req, res){
//     console.log(req.body);
//     res.status(200).send({"message": "Form received"});
// })


app.listen(port, () => {
    console.log('Server running port: ' + port);
})
