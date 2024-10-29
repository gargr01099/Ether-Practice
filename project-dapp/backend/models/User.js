const mongoose =  require("mongoose");  

const userSchema = new mongoose.Schema({
    username: String,
    walletAddress: String,  
    favoriteAddress:[String],
});
module.exports = mongoose.model("User", userSchema);
