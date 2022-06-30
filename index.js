console.log("hello world!");
console.log("こんにちは、Ether.jsの勉強をしています");

async function myFunction() {  
  const provider = await new ethers.providers.Web3Provider(window.ethereum)
  const blocknumber = await provider.getBlockNumber();
  alert(blocknumber);
}  

async function myFunction2() {  
  const provider = await new ethers.providers.Web3Provider(window.ethereum)
  const addresses = await ethereum.request({ method: 'eth_requestAccounts' });
  const signer = await provider.getSigner();
  alert(addresses[0]);
}  

async function myFunction3() {
    const provider = await new ethers.providers.Web3Provider(window.ethereum)
    const balance = await provider.getBalance("ethers.eth")
    alert(ethers.utils.formatEther(balance));
}

window.onload = async function() {
  myFunction();
  myFunction2();
  myFunction3();
}


