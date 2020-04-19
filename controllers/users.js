const User = require('../models/User');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  updateProfile,
  getLoggedUser
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    // Be sure to first delete data that should not be in the token
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}

async function updateProfile(req, res) {
  console.log(req.body)
  const updatedProfile = await User.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(updatedProfile);
}

async function getLoggedUser(req, res) {
  const loggedUser = await User.findById(req.params.id);
  res.status(200).json(loggedUser)
}