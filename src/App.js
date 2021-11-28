import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Web3 from 'web3';

function App() {
  const [fromSelcetedCoin,setFromSelectedCoin]= useState();
  const [toSelcetedCoin,setToSelectedCoin]= useState();
  const [showConnectWallet,setShowConnectWallet]= useState(false);
  var coins=[];
  coins.push({name: "ETH", img: "assets/images/ethereum-logo.png"});
  coins.push({name: "AAVE", img: "assets/images/AAVE.png"});
  coins.push({name: "BAL", img: "assets/images/BAL.png"});
  coins.push({name: "COMP", img: "assets/images/COMP.webp"});
  coins.push({name: "CRO", img: "assets/images/CRO.webp"});
  coins.push({name: "CRV", img: "assets/images/CRV.png"});
  coins.push({name: "DAI", img: "assets/images/DAI.webp"});
  coins.push({name: "DPI", img: "assets/images/DPI.png"});
  coins.push({name: "ENJ", img: "assets/images/ENJ.webp"});
  coins.push({name: "FARM", img: "assets/images/FARM.png"});
  coins.push({name: "HBTC", img: "assets/images/HBTC.png"});
  coins.push({name: "KNCL", img: "assets/images/KNCL.png"});
  coins.push({name: "LINK", img: "assets/images/LINK.png"});
  coins.push({name: "LRC", img: "assets/images/LRC.png"});
  coins.push({name: "MKR", img: "assets/images/MKR.png"});
  var coinsTo=coins;
  var selcetedCoin=(coin)=>{
    console.log(coin)
  }
  var ConnectWallet =()=>{
    
    window.open("https://metamask.io/download.html");
    if(window.ethereum == undefined){
      // web3 = new Web3(window.ethereum);
      window.open("https://metamask.io/download.html");
    }
  }
  var showConnectWalletPopup = ()=>{
    setShowConnectWallet(true);
    console.log(showConnectWallet);
  }
  return (
    <div className="App">
       <header>
        <nav class="navbar navbar-expand-lg p-0">
               <div class="d-flex mx-3 mx-sm-0 px-lg-0 w-100">
                <a class="navbar-brand" href="#">
                    <img src="assets/images/defi-logo.png" alt=""/>
                </a>
           
               <div class="align-self-stretch d-flex flex-column ml-auto">
                <div class="align-items-center d-flex justify-content-end mt-3 text-right w-100">
                 

                    <a href="" class="btn-wallet" onClick={ConnectWallet}>Connect to a Wallet</a>
                    <div class="dropdown ml-3">
                      <a class="btn btn-header-icon dropdown-toggle d-flex align-items-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-gear text-muted"></i>
                      </a>

                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">About</a>
                        <a class="dropdown-item" href="#">FAQ</a>
                      </div>
                    </div>

                    <div class="dropdown ml-3">
                      <a class="btn btn-header-icon dropdown-toggle d-flex align-items-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-ellipsis-h text-muted"></i>
                     </a>

                     <div class="dropdown-menu dropdown-menu-right ellipsis-dropdown" aria-labelledby="dropdownMenuLink">
                       <a class="dropdown-item" href="#">About</a>
                        <a class="dropdown-item" href="#">FAQ</a>
                    </div>
                  </div>
                </div>
                <div class="collapse navbar-collapse flex-column ml-auto align-items-end ml-auto justify-content-end  " id="collapsibleNavbar">
                    <a href="" class="btn btn-outline-info d-md-none mb-2 mr-2 text-uppercase text-white">Check loan status</a>
                    <div class="searchtop dsktopsearch d-lg-none">
                        <span class="p-1 btn btn-search btn-primary">
                          <img src="assets/images/search.svg" alt=""/></span>
                        <div class="inpSearch">
                            <input type="text" name="search" class="form-control" placeholder="Search.." />
                            <i class="fa fa-times searchcross"></i>
                        </div>
                       
                       </div>
                </div>
               </div>
               </div>
        </nav>
    </header>
<main>
    
    <section class="section-swap bg-section-light">
        <div class="container">
        <div class="swap-main">
               <h2 class="text-center heading">DEFI SWAP</h2>
               <p class="text-center fw-600 mb-3">The Best Place to Swap & Farm DeFi Coins</p>
               <div class="content-box">
                 <nav>
  <div class="justify-content-center nav nav-tabs p-2 border-0" id="nav-tab" role="tablist">
    <a class="nav-link active" data-toggle="tab" href="#swap" role="tab" aria-controls="nav-home" aria-selected="true">Swap</a>
    {/* <a class="nav-link" data-toggle="tab" href="#pool" role="tab" aria-controls="nav-profile" aria-selected="false">Pool</a>
    <a class="nav-link" data-toggle="tab" href="#boost" role="tab" aria-controls="nav-contact" aria-selected="false">Boost</a>
     <a class="nav-link" data-toggle="tab" href="#apy" role="tab" aria-controls="nav-contact" aria-selected="false">APY</a> */}
  </div>
</nav>
<div class="tab-content">
  <div class="tab-pane fade show active" id="swap" role="tabpanel" aria-labelledby="nav-home-tab">
    <div class="swap-box">
      <label class="mb-0">From</label>
      <div class="row">
        <div class="col-sm-6">
          <input class="form-control" data-toggle="modal" data-target="#select-token-modal-connect"  inputmode="decimal" title="Token Amount" autocomplete="off"
           autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" 
           spellcheck="false" value=""/>
        </div>
        <div class="col-sm-6 align-self-end">
        <button class="btn btn-token d-flex w-100" data-toggle="modal" data-target="#select-token-modal-from">{fromSelcetedCoin? fromSelcetedCoin : 'Select a Token'}<i class="fa fa-chevron-down ml-auto"></i></button>
        </div>
      </div>
    </div>
    <div class="p-3"><i class="fa fa-arrow-down text-muted"></i></div>
     <div class="swap-box mb-3">
      <label class="mb-0">To</label>
      <div class="row">
        <div class="col-sm-6">
          <input class="form-control" data-toggle="modal" data-target="#select-token-modal-connect"  inputmode="decimal" title="Token Amount" autocomplete="off" 
          autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" 
          spellcheck="false" value=""/>
        </div>
        <div class="col-sm-6 align-self-end">
        <button class="btn btn-token d-flex w-100" data-toggle="modal" data-target="#select-token-modal-to">{toSelcetedCoin? toSelcetedCoin : 'Select a Token'}<i class="fa fa-chevron-down ml-auto"></i></button>
        </div>
      </div>
    </div>
    <button class="btn btn-wallet-lg" data-toggle="modal" data-target="#select-token-modal-connect">Connect Wallet</button>
    <br/>
    <button class="btn btn-wallet-lg" data-toggle="modal" data-target="#select-token-modal-connect">Phantom Wallet</button>
  </div>
  <div class="tab-pane fade" id="pool" role="tabpanel" aria-labelledby="nav-profile-tab">
    <a id="join-pool-button" class="sc-csuQGl sc-Rmtcm iwhbzl" href="/defi/swap/add/CRO"><div class="css-68pfx3">Add Liquidity</div></a>
    <div class="d-flex p-3">
      <a href="" class="text-muted">Your Liquidity</a>
      <a type="button" class="ml-auto text-muted" data-toggle="popover" title="Popover title" data-trigger="hover" data-content="And here's some amazing content. It's very engaging. Right?"><i class="fa fa-question-circle"></i></a>
    </div>
    <div class="swap-box text-center mb-2">
      Connect to a wallet to view your liquidity.
    </div>

    <p class="text-muted mb-0 text-center f14 fw-500">Don't see a pool you joined? <a class="text-primary">Import it.</a></p>
  </div>
  <div class="tab-pane fade" id="boost" role="tabpanel" aria-labelledby="nav-contact-tab">
    <div role="img" aria-label="rocket" class="text-center f40 mb-3">🚀</div>
    <h3 class="cro text-center mb-3">CRO DeFi Yield</h3>
    <ul class="list-unstyled cro-list mb-2">
      <li><img src="assets/images/check.png" class="mr-2" />Up to 20x Yield Booster</li>
      <li><img src="assets/images/check.png" class="mr-2"/> Stake CRO for 1 month - 4 years</li>
      <li><img src="assets/images/check.png" class="mr-2" /> Harvest CRO Yield in 30 - 90 days</li>
    </ul>
    <a href="" class="mb-2 p-3 fw-600 d-block">Calculate Your Yield</a>
    <a id="join-pool-button" class="mb-2" href="/defi/swap/add/CRO"><div class="css-68pfx3">Stake andEarn Now</div></a>
    <a href="" class="btn-bonus"><span role="img" aria-label="present" class="mr-2">🎁</span> Bonus Liquidity Pool Reward</a>
  </div>
  <div class="tab-pane fade" id="apy" role="tabpanel" aria-labelledby="nav-contact-tab">
    <h4>Calculate Yield</h4>
    <div class="row">
      <div class="col-sm-7">
        <div class="swap-box mb-2">
      <label class="mb-0">From</label>
      <div class="row">
        <div class="col-sm-6">
          <input class="form-control" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false" value=""/>
        </div>
        <div class="col-sm-6 align-self-end">
       <div class="f24 text-right">USD</div>
        </div>
      </div>
    </div>
    <div class="swap-box mb-2">
      <label class="mb-0">From</label>
      <div class="row">
        <div class="col-sm-6">
          <input class="form-control" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false" value="" />
        </div>
        <div class="col-sm-6 align-self-end">
        <div class="f24 text-right">USD</div>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <label class="apy-counter mr-2">1 Month</label>
      <label class="apy-counter mr-2">1 Month</label>
      <label class="apy-counter mr-2">1 Month</label>
      <label class="apy-counter mr-2">1 Month</label>
      <label class="apy-counter mr-2">1 Month</label>
    </div>
      </div>
      <div class="col-sm-5">
        <div class="estimated">
      <div class="my-2">Estimated <span role="img" aria-label="rocket">🚀</span> Boosted Yield
      <span style={{marginLeft: "4px"}}> <i class="fa fa-question-circle text-muted"></i> </span>
      </div>
      <span class="forecast text-primary">Forecast APY</span>
      <div class="apy-percentage mb-3 text-primary">0.00%</div>
      <span class="forecast">Annualized CRO DeFi Yield</span>
      <div class="apy-percentage">0.00 CRO</div>
    </div>
    </div>
  </div>

</div>

</div>
</div>
</div>
</div>
</section>



   

</main>
{/* From Modal */}
<div class="modal " id="select-token-modal-from" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-muted f16" id="exampleModalLabel">Select a token</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <input type="text" id="token-search-input" placeholder="Search name or paste address" class="mb-3" value=""/>
       <div class="d-flex align-items-center">
         <div class="token-name text-muted">Token Name</div>
         <div class="token-arrow ml-auto"><i class="fa fa-arrow-down"></i></div>
       </div>
       <hr />
       <div class="token-scroll">
         {coins.map(coin=>{
           return <button type="button" style={{display:"contents"}} data-dismiss="modal" onClick={()=> setFromSelectedCoin(coin.name)}> 
           <div class="d-flex align-items-center mb-3">
             <img src={coin.img} class="token-logo mr-4"/>             
             <span class="token-heading text-muted">{coin.name}</span>
           </div>
           </button>  
         })}
                

       </div>
       <hr />
      </div>
    </div>
  </div>
</div>

{/* To Modal */}
<div class="modal fade" id="select-token-modal-to" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  data-backdrop="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-muted f16" id="exampleModalLabel">Select a token</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <input type="text" id="token-search-input" placeholder="Search name or paste address" class="mb-3" value=""/>
       <div class="d-flex align-items-center">
         <div class="token-name text-muted">Token Name</div>
         <div class="token-arrow ml-auto"><i class="fa fa-arrow-down"></i></div>
       </div>
       <hr />
       <div class="token-scroll">
         {coinsTo.map(coin=>{
           return <button type="button" style={{display:"contents"}} data-dismiss="modal"  onClick={()=> setToSelectedCoin(coin.name)}> 
           <div class="d-flex align-items-center mb-3">
             <img src={coin.img} class="token-logo mr-4"/>
             <span class="token-heading text-muted">{coin.name}</span>
           </div>
           </button>  
         })}
                

       </div>
       <hr />
      </div>
    </div>
  </div>
</div>

{/* Conect Wallet modal */}

<div class="modal fade" id="select-token-modal-connect" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  data-backdrop="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-muted f16" id="exampleModalLabel">Wallet Connection</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style={{display:"grid", gap:"10px"}}>
        <button style={{backgroundColor:"rgb(247, 248, 250)",border:"1px solid rgb(237, 238, 242)", borderRadius:"12px", 
        justifyContent:"space-between", display:"flex",padding:"1rem", width:"100%"}}>
          <div color="#4196FC" style={{fontWeight:500, }}>Crypto.com DeFi Wallet</div>
          <img src="assets/images/CRO.webp" class="wallet-logo mr-4"/>
          
        </button>
        <button style={{backgroundColor:"rgb(247, 248, 250)",border:"1px solid rgb(237, 238, 242)", borderRadius:"12px", 
        justifyContent:"space-between", display:"flex",padding:"1rem", width:"100%"}}>
          <div color="#4196FC" style={{fontWeight:500, }}>Metamask</div>
          <img src="assets/images/metamask.png" class="wallet-logo mr-4"/>
          
        </button>
        <button style={{backgroundColor:"rgb(247, 248, 250)",border:"1px solid rgb(237, 238, 242)", borderRadius:"12px", 
        justifyContent:"space-between", display:"flex",padding:"1rem", width:"100%"}}>
          <div color="#4196FC" style={{fontWeight:500, }}>WalletConnect </div>
          <img src="assets/images/walletconnect.jpg" class="wallet-logo mr-4"/>
          
        </button>
      </div>
      <div class="modal-footer">
        <p>New to Ethereum? </p>
        <a class="nav-link active" href="https://metamask.io/" target="_blank">Learn more about Wallets</a> 
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
