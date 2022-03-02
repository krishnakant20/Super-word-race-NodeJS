const express = require('express');
const cors = require('cors');
const connectToMongo = require('./config/db.config');

connectToMongo();

const app=express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.get('/welcome',(req,res)=>{
    res.send('index- welcome to game');
})

app.listen(port,()=>{
    console.log(`apk listening on ${port}`);
})