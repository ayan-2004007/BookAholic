import mongoose from "mongoose";
const BookSchema=new mongoose.Schema({
    bookname:String,
    authorname:String,
    category:String,
    image:String,
    qty:Number,
    availability:Boolean,
    description:String,
})
const BookModel=mongoose.model("Books",BookSchema)
export default BookModel