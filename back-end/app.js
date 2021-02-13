const express = require('express');
require('./db/mongoose')
const cors = require('cors')
const userRouter = require('./router/user')
const itemRouter = require('./router/item')

const app = express();
const port = process.env.PORT


app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(itemRouter)


// app.post('/form', function(req, res){
//     console.log(req.body);
//     res.status(200).send({"message": "Form received"});
// })


app.listen(port, () => {
    console.log('Server running port: ' + port);
})
