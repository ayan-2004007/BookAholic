import mongoose from "mongoose";
import bcrypt from "bcrypt";
import ApiErrors from "../utilities/ApiErrors.js";
import jwt from "jsonwebtoken"
const userSchema=new mongoose.Schema({
    avatar:String,
    username:String,
    fullname:String,
    email:String,
    password:String,
    borrowedBooks:[],
    accessToken:String
},{
    timestamps:true
})
userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password, 10)
        next()
    }else{
        return next()
    }
})
userSchema.methods.checkPassword=async function(password){
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=async function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
const User=mongoose.model("User",userSchema)
export default User