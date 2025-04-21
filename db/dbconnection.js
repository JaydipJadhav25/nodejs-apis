import mongoose from "mongoose";




export async function connectDB() {
try {
    
    const conn= await  mongoose.connect("mongodb+srv://jaydipjadhavdev:jaydipjadhavdev@cluster0.7b9j0.mongodb.net/test")
    console.log("database connected❤️")
} catch (error) {
    console.log("database connected Error !")
    process.exit(1)
 
}
  
}