console.log("hello world!");
console.log("こんにちは、Ether.jsの勉強をしています");

const provider = new ethers.providers.Web3Provider(window.ethereum)

await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner()

  a = provider.getBlockNumber();
  console.log(a);



