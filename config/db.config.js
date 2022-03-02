const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/superwordgame'

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('nodejs apk is connected to mongodb');
    })
}

module.exports=connectToMongo;