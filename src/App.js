import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import Web3 from 'web3';

function App() {
  const [fromSelcetedCoin,setFromSelectedCoin]= useState();
  const [toSelcetedCoin,setToSelectedCoin]= useState();
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
  return (
    <div className="App">
       <header>
        <nav class="navbar navbar-expand-lg p-0">
               <div class="d-flex mx-3 mx-sm-0 px-lg-0 w-100">
                <a class="navbar-brand" href="#">
                    <img src="assets/images/defi-logo.png" alt=""/>
                </a>
           
               <div class="align-self-stretch d-flex flex-column ml-auto">
                <div class="align-items-center d-lg-flex d-none justify-content-end mt-3 text-right w-100">
                 

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
           <div class="row">
             <div class="col-sm-6 offset-3">
               <h2 class="text-center heading">DEFI SWAP</h2>
               <p class="text-center fw-600 mb-3">The Best Place to Swap & Farm DeFi Coins</p>
               <div class="content-box">
                 <nav>
  <div class="justify-content-center nav nav-tabs p-2 border-0" id="nav-tab" role="tablist">
    <a class="nav-link active" data-toggle="tab" href="#swap" role="tab" aria-controls="nav-home" aria-selected="true">Swap</a>
    <a class="nav-link" data-toggle="tab" href="#pool" role="tab" aria-controls="nav-profile" aria-selected="false">Pool</a>
    <a class="nav-link" data-toggle="tab" href="#boost" role="tab" aria-controls="nav-contact" aria-selected="false">Boost</a>
     <a class="nav-link" data-toggle="tab" href="#apy" role="tab" aria-controls="nav-contact" aria-selected="false">APY</a>
  </div>
</nav>
<div class="tab-content">
  <div class="tab-pane fade show active" id="swap" role="tabpanel" aria-labelledby="nav-home-tab">
    <div class="swap-box">
      <label class="mb-0">From</label>
      <div class="row">
        <div class="col-sm-6">
          <input class="form-control" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false" value=""/>
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
          <input class="form-control" inputmode="decimal" title="Token Amount" autocomplete="off" autocorrect="off" type="text" pattern="^[0-9]*[.,]?[0-9]*$" placeholder="0.0" minlength="1" maxlength="79" spellcheck="false" value=""/>
        </div>
        <div class="col-sm-6 align-self-end">
        <button class="btn btn-token d-flex w-100" data-toggle="modal" data-target="#select-token-modal-to">{toSelcetedCoin? toSelcetedCoin : 'Select a Token'}<i class="fa fa-chevron-down ml-auto"></i></button>
        </div>
      </div>
    </div>
    <button class="btn btn-wallet-lg">Connect Wallet</button>
  </div>
  <div class="tab-pane fade" id="pool" role="tabpanel" aria-labelledby="nav-profile-tab">2</div>
  <div class="tab-pane fade" id="boost" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
  <div class="tab-pane fade" id="apy" role="tabpanel" aria-labelledby="nav-contact-tab">4</div>

</div>
               </div>
             </div>
           </div>

        </div>


    </section>



   

</main>

<div class="modal fade" id="select-token-modal-from" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-muted f16" id="exampleModalLabel">Select a token
</h5>
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

<div class="modal fade" id="select-token-modal-to" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-muted f16" id="exampleModalLabel">Select a token
</h5>
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
    </div>
  );
}

export default App;
