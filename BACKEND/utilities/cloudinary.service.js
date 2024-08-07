
import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadAvatar= async (filepath)=>{
    try {
        if(!filepath){
            return null
        }
        const uploadResponse=await cloudinary.uploader.upload(filepath,{
            resource_type:"auto"
        })
        // console.log("file uploaded succesfully",uploadResponse.url)
        fs.unlinkSync(filepath)
        return uploadResponse
    } catch (error) {
        fs.unlinkSync(filepath)
        return null
    }
}

export default uploadAvatar