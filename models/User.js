const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
    userName: {
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
    const user = this;
    if (!user.isModified('password')) return next();
    // password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
      if (err) return next(err);
      // replace the user provided password with the hash
      user.password = hash;
      console.log("hash", user)
      next();
    });
  });

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
};

module.exports = mongoose.model("User", userSchema)