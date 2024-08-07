import ApiErrors from "../utilities/ApiErrors.js"
import User from "../models/user.model.js" 
import ApiResponse from "../utilities/ApiResponse.js"
import uploadAvatar from "../utilities/cloudinary.service.js"
import sendSignupmail from "../utilities/signupMail.service.js"


// REGISTRATION OF A NEW USER 
const registerUser=async (req,res)=>{
    const {username,fullname,email,password}=req.body
    // console.log(req.body)
    if(fullname==="" || email===""||username===""||password===""){
        return res.status(400).json(
            new ApiErrors(400, "All fields are required for register!")
        )
    }
    if(!email.includes("@")){
        return res.status(400).json(
            new ApiErrors(400, "Email is not valid !")
        )
    }
    const alreadyUser=await User.findOne({
        $or:[{username},{email}]
    })
    if(alreadyUser){
        return res.status(409).json(
            new ApiErrors(409, "user with username or email already exists !")
        )
    }
    const avatarLocalPath=req.files?.avatar[0]?.path||''
    if(!avatarLocalPath){
        return res.status(400).json(
            new ApiErrors(400,"Avatar is required !")
        )
    }
    const avatarUrl=await uploadAvatar(avatarLocalPath)
    if(!avatarUrl){
        return res.status(400).json(
            new ApiErrors(400,"Failed to upload avatar !. Please reupload or change the photo")
        )
    }
    const newUser=await User.create({
        avatar:avatarUrl.url,
        username,
        fullname,
        email,
        password
    })
    const createdUser=await User.findById(newUser._id)
    if(!createdUser){

        return res.status(500).json(
            new ApiErrors(500, "Error occureded while registering the user!")
        )
    }
    sendSignupmail(createdUser.email,createdUser.username,createdUser.fullname,password)
    return res.status(201).json(
        new ApiResponse (201,createdUser,"User Registered Sucessfully")
    )
}   


// LOGIN OF AN EXISTING USER
const loginUser=async (req,res)=>{
    const {username,password}=req.body
    // console.log(req.body)
    if(username===""||password===""){
        return res.status(400).json(
            new ApiErrors(400,"All fields are required for login!")
        )
    }
    const existedUser= await User.findOne({username})
    if(!existedUser){
        return res.status(409).json(
            new ApiErrors(409,"User with this username is not exists!")
        )
    }
    const passwordMatch=await existedUser.checkPassword(password)
    if(!passwordMatch){
        return res.status(401).json(
            new ApiErrors(401,"Password not matched !")
        )
    }
    const accessToken=await existedUser.generateAccessToken()
    // console.log(accessToken)
    const updatedUser= await User.findByIdAndUpdate(existedUser._id,{accessToken},{new:true}).select("-password")
    if(!updatedUser){
        return res.status(500).json(
            new ApiErrors(500,"failed to load the access token!")
        )
    }
    return res.status(201)
    .cookie("accessToken",accessToken,{
        httpOnly:true,
        secure:true,
        sameSite:"Strict"
    })
    .json(
        new ApiResponse(201,updatedUser,"User logged in successfully")
    )
}


export {registerUser,loginUser}
