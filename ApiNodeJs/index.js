// import thu vien
const express = require('express');
const mongoose = require('mongoose');


//tao doi tuong moi cho express
const app = express();


//ket noi csdl mongodb
mongoose.connect('mongodb://localhost:27017/db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Ket noi thanh cong voi mongodb");
}).catch((err)=>{
    console.log("Loi", err);
});


//truy van csdl
//khoi chay may chu
const PORT = process.env.PORT|| 5000;
app.listen(PORT, ()=>{
    console.log('server dang chay o cong 5000');
});