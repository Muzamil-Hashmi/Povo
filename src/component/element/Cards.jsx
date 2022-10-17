import React, { useState } from "react";
import { AccordionButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Cards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState({
    title: "",
    text: "",
  });
  return (
    <>
      <div className="container-fluid " id="cards">
        <div className="container ">
          <div className="row  py-5">
            <h1 className="text-center fw-bold text-white"> Povo Feature</h1>
            <div className="col-md-4 my-5">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <div className="text-center">
                    <img className="w-50 py-3" src="/assets/a.png" alt="" />
                  </div>
                  <h5 className="card-title text-center text-danger">
                    In-Games Items <br /> Crafting
                  </h5>
                  <p className="card-text">
                    In-game items crafting is a skill or set of skills option
                    specifically provides in massively multiplayer online games
                    or role playing games
                  </p>
                  <div>
                    <button className="bg-white border-0 text-warning position-absolute bottom-0 end-0" onClick={() =>{
                        setData({
                          title:"In-Games Items  Crafting",
                          text:"In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games",
                        })
                        handleShow()
                    }}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  my-5">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body bg-danger text-white">
                  <div className="text-center">
                    <img className="w-25 py-1" src="/assets/b.png" alt="" />
                  </div>
                  <h5 className="card-title text-center ">
                    Cross chain interpretability <br /> & custom wallet
                  </h5>
                  <p className="card-text">
                    DeFi has a motive to incorporate traditional financial
                    services in the cryptocurrency ecosystem. This can only be
                    possible if each blockchain in the
                  </p>
                  <div>
                    <button className="bg-danger border-0 text-warning position-absolute bottom-0 end-0" onClick={() =>{
                        setData({
                          title:" Cross chain interpretability  & custom wallet",
                          text:" DeFi has a motive to incorporate traditional financial services in the cryptocurrency ecosystem. This can only possible if each blockchain in the",
                        })
                        handleShow()
                    }}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 my-5">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <div className="text-center">
                    <img className="w-25 py-3" src="/assets/c.png" alt="" />
                  </div>
                  <h5 className="card-title text-center text-danger">
                    Multiverse <br /> Gaming
                  </h5>
                  <p className="card-text">
                    The concept of multiverse gaming can be described as a set
                    of parallel world, where theplayers can theoretically travel
                    from one
                  </p>
                  <div>
                    <button className="bg-white border-0 text-warning position-absolute bottom-0 end-0" onClick={() =>{
                        setData({
                          title:"  Multiverse  Gaming",
                          text:" The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically tral from one",
                        })
                        handleShow()
                    }}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body bg-danger text-white">
                  <div className="text-center">
                    <img className="w-25 py-3" src="/assets/d.png" alt="" />
                  </div>
                  <h5 className="card-title text-center ">
                    Tokenize character <br /> Items
                  </h5>
                  <p className="card-text">
                    Povo is one of those games that have tokenized their
                    characters. Meaning that, you can now advance your levels
                    within the game
                  </p>
                  <div>
                    <button className="bg-danger border-0 text-warning position-absolute bottom-0 end-0" onClick={() =>{
                        setData({
                          title:"Tokenize character Items",
                          text:"Povo is one of those games that have tokenized thei characters. Meaning that, you can now advance your levels  within the game",
                        })
                        handleShow()
                    }}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <div className="text-center">
                    <img className="w-50 " src="/assets/e.png" alt="" />
                  </div>
                  <h5 className="card-title text-center text-danger">
                    Dapp Store and game studio integration{" "}
                  </h5>
                  <p className="card-text">
                    Decentralized applications are a set of programs that
                    harness excess power from different nodes globally.
                  </p>
                  <div>
                    <button className="bg-white border-0 text-warning position-absolute bottom-0 end-0" onClick={() =>{
                        setData({
                          title:" Dapp Store and game studio integration",
                          text:" Decentralized applications are a set of programs that harness excess power from different nodes globally.",
                        })
                        handleShow()
                    }}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body bg-danger text-white">
                  <div className="text-center">
                    <img className="w-25 py-2" src="/assets/b.png" alt="" />
                  </div>
                  <h5 className="card-title text-center ">
                    Gamer/devs can introduce their own token <br /> Crafting
                  </h5>
                  <p className="card-text">
                    Blockchain has revolutionized the world of gaming. It allows
                    the projection of value in intangible assets. It helps
                    gamers to securely
                  </p>
                  <div>
                    <button className="bg-danger border-0 text-warning position-absolute bottom-0 end-0" onClick={() =>{
                        setData({
                          title:"Gamer/devs can introduce their own token ",
                          text:"Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely",
                        })
                        handleShow()
                    }}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal  show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {data.text}
        </Modal.Body>
        
      </Modal>
    </>
  );
}
