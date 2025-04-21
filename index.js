import express from "express"
const app = express();
import mongoose from "mongoose";


mongoose.connect("mongodb+srv://jaydipjadhavdev:jaydipjadhavdev@cluster0.7b9j0.mongodb.net/test")
.then(()=>{
 console.log("database connected❤️")
})
.catch((err)=>{

 console.log("database connected Error !");


});




app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});



app.get("/name/:name", (req, res) => {
    const name = req.params.name; // Correctly extracting the route parameter
    res.send(`Hello, ${name}!`);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});