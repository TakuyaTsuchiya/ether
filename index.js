console.log("hello world!");
console.log("こんにちは、Ether.jsの勉強をしています");

async function myFunction() {
  
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  const blocknumber = await provider.getBlockNumber();
  
  alert(blocknumber);
}  


