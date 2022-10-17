import React from 'react'

export default function Benefit() {
  return (
    <div className='container-fluid pt-5' id='benefit'>
      <div className="container pt-5">

        <div className="row text-white fw-bold">
            <h1 className='text-center '>Benifits Of POVO</h1>
            <div className="col-md-6 text-white  pt-5">

                <h5>Anyone Who Owns Gaming Assets</h5>
               <ul>
                <li>Transfer items to another account</li>
                <li>Renders the items to mount reserve values</li>
                <li>Ease of using the items accross other supported games</li>
                
               </ul>
               <h5>Game tournament and receive winnings in your wallet</h5>
               <h5>Artificial Intelligence improve players expericne</h5>
               <h5>Withdraw funds using PayPal</h5>
            </div>
            <div className="col-md-6 py-5">

                <img  className='w-75' src="/assets/10001.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}
