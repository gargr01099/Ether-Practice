const User = require("../models/User");

exports.saveUserData = async (req, res) => {
  const { username, walletAddress, favoriteAddress } = req.body;
  try {
    let user = await User.findOne({ walletAddress });
    if (!user) {
      user = new User({
        username,
        walletAddress,
        favoriteAddress,
      });
      await user.save();
    } else {
      user.username = username;
      user.favoriteAddress = favoriteAddress;
      await user.save();
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
