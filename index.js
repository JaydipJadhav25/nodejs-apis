import express from "express"
const app = express();
import { connectDB } from "./db/dbconnection.js";
import userRouter from "./routes/user.routes.js"
import cors from "cors"


connectDB()

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});


app.use("/user" , userRouter);

app.get("/name/:name", (req, res) => {
    const name = req.params.name; // Correctly extracting the route parameter
    res.send(`Hello, ${name}!`);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});