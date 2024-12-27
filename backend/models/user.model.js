import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [6,'EMAIL MUST BE AT LEAST 6 CHARACTERS LONG'],
        maxLength: [50,'EMAIL MUST BE AT MOST 50 CHARACTERS LONG'],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address example: swabhi@123.dseu.ac.in']
    },
    password:{
        type:String,
        select: false,
    }
})


userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hashPassword(password,10);
}

userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateJWT = function() {
    return jwt.sign({email: this.email},process.env);
}

const User = mongoose.model('user',userSchema);
export default User;