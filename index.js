async function connectWallet() {
  accounts = await window.ethereum.request({method: "eth_requestAccounts"}).catch((err)=>{
    //error handling
    console.log(err.code)
  })

  console.log(accounts)
}
