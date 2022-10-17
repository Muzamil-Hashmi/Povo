import React from 'react'

export default function Tooken() {
  return (
    <div className='container-fluid ' id='tooken'>

      <div className="container text-white pt-5">

        <div className="row pt-5">
          <h1 className='text-center fw-bold pt-5 '>POVO <span className='text-danger'>Tokenomics</span></h1>

          <div className="col-md-6 pt-5">
            <h5 className='text-primary fw-bold'>TOTAL SUPPLY:10,000,000</h5>
            <h2 className='text-warning fw-bold'>Token <span className='text-primary'>Distribution </span>(Gamenomics)</h2>

<ul>

  <li className='my-3'>

    <span className='text-white bg-primary fw-bold px-5  '> Presale   </span>30%
  </li>
  <li>

    <span className='text-white bg-warning fw-bold px-4 '> Staking pool   </span>23%
  </li>
  <li className='my-3'>

    <span className='text-white bg-danger fw-bold px-3 '> liquidity pool  </span>20%
  </li>
  <li className='my-3'>

    <span className='text-white bg-success fw-bold px-3 '> Advisors   </span>10%
  </li>
  <li>

    <span className='text-white bg-info fw-bold px-3 '> Airdop   </span>7%
  </li >
  <li className='my-3'>

    <span className='text-white bg-secondary fw-bold px-1 '> Gaming   </span>7%
  </li>
  <li>

    <span className='text-white bg-danger fw-bold  '> Team   </span>3%
  </li>
</ul>
          </div>

          <div className="col-md-6 pt-5">
            <img className='w-100' src="assets/10004.png" alt="" />

            
          </div>
        </div>
      </div>
    </div>
  )
}
