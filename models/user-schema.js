const mongoose =require('mongoose');
const Schema = mongoose.Schema;

let userSchema=new Schema({
    name:{
        type:String
    },
    car_plates:{
        type:String
    }
},{
    collection:'users'
})

module.exports=mongoose.model('User',userSchema)