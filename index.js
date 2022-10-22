function connectWallet() {
  window.ethereum.request({method: "eth_requestAccounts"}).catch((err)=>{
    //error handling
    console.log(err.code)
  })
}
