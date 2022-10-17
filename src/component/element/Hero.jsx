import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Carousel from 'react-bootstrap/Carousel';


export default function Hero() {

  
  return (

   
    <div className="container-fluid" id="hero">

      
      <div className="container text-white pt-5 ">
        <div className="row">
          <div className="col-md-6 px-5">
            <h1 className="display-5 fw-bold my-4 py-5"> PALY TO WIN REWARD ON HOLDING</h1>
            <h3>
              Frictionless yield & liquidity generation protocol for game lover.
              Povo is deflationary in it's nature
            </h3>
            <button className="btn btn-outline-danger text-white my-4 ">
              {" "}
              &nbsp; Trade on PancakeSwap
            </button>
            <button type="button" className="btn btn-outline-danger text-white ms-5">Whitepaper</button>

            {/* <button class="button-Buy-now my-4">Whitepaper</button> */}
             <br />
            <AiFillTwitterCircle size={30} color="orange" />
            <AiFillLinkedin size={30} color="white" />
            <AiFillTwitterCircle size={30} color="red" />
            <AiFillLinkedin size={30} color="yellow" />
            <AiFillTwitterCircle size={30} color="blue" />
            <AiFillLinkedin size={30} color="white" />
            <div className="d-flex my-4">
              <div>
                <h5>Buying Free is 5%</h5>
                <ul>
                  <li>3% of buy back Fund</li>
                  <li>1% Marketing and Development</li>
                  <li>1% Reflaction and Holdes</li>
                </ul>
              </div>
              <div>
                <h5>Selling Free is 7%</h5>
                <ul>
                  <li>4% of buy back Fund</li>
                  <li>1% Marketing and Development</li>
                  <li>2% Reflaction and Holdes</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
        
          <div className=" mx-5">
          <Carousel controls={false} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/10008.png"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/10007.png"
          alt="Second slide"
        />

        
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/10009.png"
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel >
          </div>
            <div className="col-md-10 col-xs-12 m-auto pt-5">
              <div className="input-group mb-3">
                <div className="input-group-prepend ">
                  <span className="input-group-text  " id="basic-addon1">
                    Token Address
                  </span>
                </div>
                <input
                  type="text"
                  disabled=""
                  className="form-control"
                  id="form-control"
                  value="0x2a2d03a47ae6220312337d1f094badcd1ee948cc"
                />
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-md-4 ">
                <img
                  className="w-100"
                  src="assets/xt.png"
                  alt=""
                 
                />
                
              </div>
              <div className="col-md-4 ">
                <img
                  className="w-100"
                  src="assets/yahoo.png"
                  alt=""
                  
                />
                
              </div>
              <div className="col-md-4">
                <img className="w-100" src="assets/benzin.png" alt=""  />
                
              </div>
            </div>
          </div>
        </div>
       <div className="container-fluid ">
       <div className="row text-center bg-black">
          <div className="col-md-4">
            <img
              className="w-100"
              src="assets/yahoo.png"
              alt=""
              
            />
          </div>
          <div className="col-md-4 pt-4">
          <img className="w-75" src="assets/benzin.png" alt=""  />

          </div>
        </div>
       </div>
      </div>
    </div>
  );
}
