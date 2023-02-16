import {Schema, model} from "mongoose";
import Role from "./Role";
import bcrypt  from 'bcryptjs'


const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required: true,
    },
    roles:[{
        ref: "Role",
        type: Schema.Types.ObjectId   
    }]
},{
    versionKey:false
})


userSchema.statics.encryptPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password,salt)
}

userSchema.statics.comparePassword = async(password, recibedPassword)=>{
    return await bcrypt.compare(password, recibedPassword)
}

export default model('User',userSchema);