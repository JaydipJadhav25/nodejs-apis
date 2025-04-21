import {Router} from "express"
import { userModel } from "../model/user.model.js";
import { faker } from "@faker-js/faker"


// Generate random user data
 function generateRandomUser() {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      age: faker.number.int({ min: 18, max: 80 })
    };
  }


const router = Router();

router.get("/" , async(req, res)=>{
    return res.send("<h1>this is user router call...........</h1>")
})


router.get("/add" , async(req, res)=>{

    const data = generateRandomUser();
    const user = await userModel.create({
        name : data.name,
        email : data.email,
        age : data.age
    });


    return res.json(user);
})

router.get("/all", async(req , res)=>{
    const users = await userModel.find();

    return res.json({
        users : users
    })
})





export default router;