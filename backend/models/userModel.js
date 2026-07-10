const { Schema, default: mongoose } = require("mongoose")
const bcrypt = require("bcrypt");
const userSchema = new Schema({
    fullname: String,
    email: {
        type: String,
        unique: true,
    },
    phone: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
});
userSchema.pre("save", async function () {
    // Don't hash if the password hasn't changed
    if (!this.isModified("password")) {
        return;
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        
    } catch (error) {
       
    }
});
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};
const User = mongoose.model("users", userSchema);
module.exports = User;