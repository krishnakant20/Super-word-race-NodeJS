const express = require('express');
const cors = require('cors');
const connectToMongo = require('./config/db.config');
const session = require('express-session');

connectToMongo();

const app=express();
const port = 5000;

app.use(cors());
app.use(session({secret:'pawar123'}));
app.use(express.json());

app.get('/welcome',(req,res)=>{
    res.send('index- welcome to game');
})

app.use('/api/user',require('./routes/user.route'));


app.listen(port,()=>{
    console.log(`apk listening on ${port}`);
})