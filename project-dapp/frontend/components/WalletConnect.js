import { useState } from "react";
import { ethers } from "ethers";

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("");

  const connectWallet = async () => {
    if (typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setWalletAddress(account);

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
      } catch (error) {
        console.error("COnnection failed", error);
      }
    }
  };
  return (
    <div>
      <button onClick={connectWallet}>Connect Wallet</button>
      {walletAddress && (
        <div>
          <p>Address: {walletAddress}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      )}
    </div>
  );
};
export default WalletConnect;
