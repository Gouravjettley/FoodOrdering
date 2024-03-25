const mongoose = require ('mongoose');
const{Schema , model}= mongoose;

const userSChema = new Schema ({
    username:{type:String,required:true,min:4},
    password:{type:String,required:true,unique:true}
})

const userModel = model('user',userSChema);

module.exports = userModel;