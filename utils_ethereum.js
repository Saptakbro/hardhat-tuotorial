import { ethers } from "ethers";

// Modern dapp browsers...
if (window.ethereum) {
 const provider = new ethers.providers.Web3Provider(window.ethereum);
 try {
    // Request account access if needed
    await window.ethereum.request({ method: "eth_requestAccounts" });
    // Acccounts now exposed
    console.log("Connected account:", await provider.listAccounts());
 } catch (error) {
    console.error("User denied account access");
 }
}
// Legacy dapp browsers...
else if (window.web3) {
 const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
 console.log("Connected account:", await provider.listAccounts());
}
// Non-dapp browsers...
else {
 console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
}
