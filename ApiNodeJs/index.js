// import thu vien
const express = require('express');
const mongoose = require('mongoose');

// const sinhvien = require('./sinhvienModel');

//tao doi tuong moi cho express
const app = express();
app.set('view engine', 'ejs');


//ket noi csdl mongodb
mongoose.connect('mongodb://localhost:27017/db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Ket noi thanh cong voi mongodb");
}).catch((err)=>{
    console.log("Loi", err);
});

//doc dl 
const sinhvienSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
});

const sinhvien = mongoose.model('student', sinhvienSchema);
//truy van csdl
//chon csdl thao tac
// const db1 = mongoose.connection.useDb('db1');

// //dinh nghia model cho bang du lieu
// const SinhVienSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

//anh xa model vao bang dl
// const SinhVien = db1.model('sinhvien', SinhVienSchema);

//tao link 
app.get('/sinhvien', async(req, res) => {
    try {
        const sinhviens = await sinhvien.find(); // doc du lieu tu bang sinh vien
        // res.json(sinhviens);
        res.render('students', {sinhviens: sinhviens});
        console.log(sinhviens);
        // if(sinhvien.length>0){
        //     res.json(sinhvien); //api tra ve ket qua
        // }
        // else{
        //     res.status(404).json({error: "khong co sinh vien"});
        // }
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "doc du lieu loi"});
    }
});
//khoi chay may chu
const PORT = process.env.PORT|| 5000;
app.listen(PORT, ()=>{
    console.log('server dang chay o cong 5000');
});