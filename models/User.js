const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    firstName: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
});



userSchema.pre('save', function(next) {
    // this will be set to the current document
    const user = this;
    // password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if (err) return next(err);
        // replace the user provided password with the hash
        user.password = hash;
        next();
    });
  });

module.exports = mongoose.model("User", UserSchema)