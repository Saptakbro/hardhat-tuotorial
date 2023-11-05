// components/WalletBalance.js
import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function WalletBalance() {
 const [balance, setBalance] = useState(0);

 useEffect(() => {
    const fetchBalance = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(await provider.listAccounts()[0]);
      setBalance(ethers.utils.formatEther(balance));
    };

    fetchBalance();
 }, []);

 return (
    <div>
      <h2>Wallet Balance</h2>
      <p>{balance} ETH</p>
    </div>
 );
}