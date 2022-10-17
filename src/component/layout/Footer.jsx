import React from 'react'
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';


function Footer() {
  return (
    <div className="container-fluid    " id='foot'>

<div className="container  py-5 " >


<div className="row">

  <div className=" col-6   d-flex  ">
  <a className="navbar-brand " href="#"><img src="assets/logo.png" alt=" "width={70} /></a>

  <p>Play to win <br /> Frictionless yield & liquidity generation protocol <br /> for game lover. Povo is deflationary in it's nature </p>
  


  </div>
  
  
  <div className="col-md-6 text-center pt-4 ">

  

<AiFillTwitterCircle size={30} color="blue" />

<AiFillLinkedin size={30} color="pink" className='mx-3'/>
<AiFillTwitterCircle size={30} color="red" />

<AiFillLinkedin size={30} color="yellow" className='mx-3'/>
<AiFillTwitterCircle size={30} color="green" />

<AiFillLinkedin size={30} color="silver" className='mx-3'/>






  </div>
<hr />
<div className="row">

<div className="col-md-12 text-center ">

<div className='style9 '>© 2022 Quant Network Limited. All rights reserved</div>
</div> 




</div>
</div>
</div>
    </div>
  )
}

export default Footer
