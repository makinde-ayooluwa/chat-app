const User = require("../models/userModel");

const registerUser = async (req, res) => {
    const { fullname, email, phone, password } = req.body;
    if (fullname == "" || email == "" || phone == "" || password == "") {
        res.status(500).json({ statusCode: 500, message: "All fields are required" });
        return;
    } else {
        const existingPhone = await User.findOne({ phone });
        const existingEmail = await User.findOne({ email });
        if (existingPhone || existingEmail) {
            return res.status(409).json({
                statusCode: 409,
                message: "Phone number or email address already exists."
            });
        }
        else {
            const newUser = await User.create({ fullname: fullname, email: email, phone: phone, password: password });
            return res.status(200).json(
                {
                    statusCode: 200,
                    message: "Account created successfully. Redirection to login page.....",
                    userId: newUser._id
                }
            );
        }
    }
}
const loginUser = async(req,res)=>{
    const {email, password} = req.body;
    if(email == "" || password == ""){
        return res.status(500).json({status: false, message:"Fields are required"});
    }
    const exists = await User.findOne({email});
    const verifyPassword = await exists.comparePassword(password);
    if(exists && verifyPassword){
        return res.status(200).json({status: true, message:"Login successful", userId: exists._id});
    }else{
        return res.status(500).json({status: true, message:"Account not found or incorrect credentials"});
    }
}
module.exports = { registerUser, loginUser };