import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Exclusive() {
  return (
    <div className="container-fluid" id="exclusive">
      <div className="container  py-5">
        <div className="row ">
          <Carousel   swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={false} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  
  >
            <div className="col-md-3">
              <img className="" src="/assets/10010.png" alt="" width="245" /> <br />
              <button type="button" className="btn btn-danger     mt-3">
                Buy
              </button>
            </div>
            <div className="col-md-3 ">
              <img className="" src="/assets/10007.png" alt="" width="245" /> <br />
              <button  type="button" className="btn btn-danger  mt-3">
                Buy
              </button>
            </div>
            <div className="col-md-3">
              <img className="" src="/assets/10008.png" alt=""  width="250"/> <br />
              <button type="button" className="btn btn-danger   mt-3">
                Buy
              </button>
            </div>

            <div className="col-md-3">
              <img className="" src="/assets/10009.png" alt="" width="240" /> <br />
              <button type="button" className="btn btn-danger   mt-3">
                Buy
              </button>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
