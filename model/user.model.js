import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,

    },
    age: {
        type: Number,
        min: 0
    }
});



export const userModel = mongoose.model('User', userSchema);

