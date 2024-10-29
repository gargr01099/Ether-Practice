import axios from "axios";
export default async function handler(req, res) {
  const { username, walletAddress, favoriteAddress } = req.body;
  try {
    const response = await axios.post(
      `${process.env.BACKEND_API_URL}/api/users/save-user`,
      {
        username,
        walletAddress,
        favoriteAddress,
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log("Error saving user data", error);
    res.status(500).json({
      success: false,
      message: "Error saving user data",
    });
  }
}
