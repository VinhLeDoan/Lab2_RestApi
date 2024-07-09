const mongoose=require('mongoose');//import thu vien
const sinhvienSchema=new mongoose.Schema({
    name:{    //ten truong du lieu
        type: String, //kieu du lieu
        required: true //bat buoc phai nhap
    },
    age: {
        type: Number,
        required: true
    },
});
const sinhvien=mongoose.model('student',sinhvienSchema);//tao model
module.exports=sinhvien;//export module sinh vien