import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { a } from "react-router-dom";
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";

class BasicElements extends React.Component {
  render() {
    return (
      <>
         <a to={"/"}>
        <DemoNavbar />
        </a>
        <section className="section section-components " id="section-components"
        >
          <Container>


            <h1 className="mb-1">
              <b>Build</b>
            </h1>
            {/* Buttons */}
            <h2>
              The Build package is designed for entrepreneurs and businesses looking to establish a strong foundation for their ventures.
            </h2>

            {/* ???????//////////////////////////////////////////// */}
            <Row className="mt-6">
              <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                   <img className="w-100 pt-0" src={"/img/icon/front-Build.png"} />
                <div className="mb-1 p-3  bg-white rounded minH">

              

                  <div className="text-center pt-2">
                    <a  href=" https://we.tl/t-oWutX908EL" target="_blank" rel="noopener noreferrer">
                      <Button className=" rounded w-30 mr-5 text-center" color="dark" type="button">
                      <i className="fa fa-eye " style={{fontSize:"40px"}}></i>
                      </Button>
                    </a>
                    <a  href=" https://we.tl/t-oWutX908EL" target="_blank" rel="noopener noreferrer">
                      <Button className="w-30  text-center"  color="primary" type="button">
                      <i className="fa fa-arrow-circle-down " style={{fontSize:"40px"}}></i>
                      </Button>
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                <div className="mb-1 p-3  bg-white rounded minH">

                  <div className="  pb-3 pt-5">
                    <h2 className="text-center ">
                      <b>Proven potential</b>
                    </h2>
                    <h3 className="text-center pb-4 mb-4">
                      (Business ideas)
                    </h3>
                  </div>

                  <div className="UnderLine1 pb-7 pt-5 text-center" >
                    <img style={{ width: "25%" }} src={"/img/icon/lamp.png"} />

                  </div>
                  <div className="text-center pt-3 pb-1">
                    <a  href=" https://we.tl/t-oWutX908EL" target="_blank" rel="noopener noreferrer">
                      <Button className=" rounded w-30 mr-5 text-center" color="dark" type="button">
                      <i className="fa fa-eye " style={{fontSize:"40px"}}></i>
                      </Button>
                    </a>
                    <a  href=" https://we.tl/t-oWutX908EL" target="_blank" rel="noopener noreferrer">
                      <Button className="w-30  text-center"  color="primary" type="button">
                      <i className="fa fa-arrow-circle-down " style={{fontSize:"40px"}}></i>
                      </Button>
                    </a>
                  </div>
                </div>
              </Col> <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                <div className="mb-1 p-3  bg-white rounded minH">

                  <div className="  pb-3 pt-5">
                    <h2 className="text-center ">
                      <b>Micro SaaS</b>
                    </h2>
                    <h3 className="text-center pb-4 mb-4">
                      (Business ideas)
                    </h3>
                  </div>

                  <div className="UnderLine1 pb-7 pt-5 text-center" >
                  <img style={{ width: "33%" }} src={"/img/icon/file.png"} />


                  </div>
                  <div className="text-center pt-3 pb-1">
                    <a  href=" https://we.tl/t-oWutX908EL" target="_blank" rel="noopener noreferrer">
                      <Button className=" rounded w-30 mr-5 text-center" color="dark" type="button">
                      <i className="fa fa-eye " style={{fontSize:"40px"}}></i>
                      </Button>
                    </a>
                    <a  href=" https://we.tl/t-oWutX908EL" target="_blank" rel="noopener noreferrer">
                      <Button className="w-30  text-center"  color="primary" type="button">
                      <i className="fa fa-arrow-circle-down " style={{fontSize:"40px"}}></i>
                      </Button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-6">
              <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                <div className="mb-1 p-3  bg-white rounded minH">

                  <div className="  pb-3 pt-5">
                    <h2 className="text-center ">
                      <b>SaaS writing</b>
                    </h2>
                    <h3 className="text-center pb-4 mb-4">
                      (Business ideas)
                    </h3>
                  </div>

                  <div className="UnderLine1 pb-7 pt-5 text-center" >
                    <img style={{ width: "33%" }} src={"/img/icon/edit.png"} />

                  </div>
                  <div className="text-center pt-2">
                    <a  href=" https://we.tl/t-oWutX908EL" target="_blank" rel="noopener noreferrer">
                      <Button className=" rounded w-30 mr-5 text-center" color="dark" type="button">
                      <i className="fa fa-eye " style={{fontSize:"40px"}}></i>
                      </Button>
                    </a>
                    <a  href=" https://we.tl/t-oWutX908EL" target="_blank" rel="noopener noreferrer">
                      <Button className="w-30  text-center"  color="primary" type="button">
                      <i className="fa fa-arrow-circle-down " style={{fontSize:"40px"}}></i>
                      </Button>
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                <div className="mb-1 p-3  bg-white rounded minH">

                  <div className="  pb-3 pt-5">
                    <h2 className="text-center ">
                      <b>Day 1 to day 30</b>
                    </h2>
                    <h3 className="text-center pb-4 mb-4">
                 <br></br>
                    </h3>
                  </div>

                  <div className="UnderLine1 pb-7 pt-5 text-center" >
                    <img style={{ width: "33%" }} src={"/img/icon/calender.png"} />

                  </div>
                  <div className="text-center pt-2">
                    <a  href=" https://we.tl/t-oWutX908EL" target="_blank" rel="noopener noreferrer">
                      <Button className=" rounded w-30 mr-5 text-center" color="dark" type="button">
                      <i className="fa fa-eye " style={{fontSize:"40px"}}></i>
                      </Button>
                    </a>
                    <a  href=" https://we.tl/t-oWutX908EL" target="_blank" rel="noopener noreferrer">
                      <Button className="w-30  text-center"  color="primary" type="button">
                      <i className="fa fa-arrow-circle-down " style={{fontSize:"40px"}}></i>
                      </Button>
                    </a>
                  </div>
                </div>
              </Col> <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                <div className="mb-1 p-3  bg-white rounded minH">

                  <div className="  pb-3 pt-5">
                    <h2 className="text-center ">
                      <b>Tools</b>
                    </h2>
                    <h3 className="text-center pb-4 mb-4">
                    <br/>
                    </h3>
                  </div>

                  <div className="UnderLine1 pb-7 pt-5 text-center" >
                    <img style={{ width: "33%" }} src={"/img/icon/tool.png"} />

                  </div>
                  <div className="text-center pt-2">
                    <a  href=" https://we.tl/t-oWutX908EL" target="_blank" rel="noopener noreferrer">
                      <Button className=" rounded w-30 mr-5 text-center" color="dark" type="button">
                      <i className="fa fa-eye " style={{fontSize:"40px"}}></i>
                      </Button>
                    </a>
                    <a  href=" https://we.tl/t-oWutX908EL" target="_blank" rel="noopener noreferrer">
                      <Button className="w-30  text-center"  color="primary" type="button">
                      <i className="fa fa-arrow-circle-down " style={{fontSize:"40px"}}></i>
                      </Button>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>

            {/*              
                <Button
                  className="text-danger ml-1"
                  color="a"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Danger
                </Button> */}
          </Container>
        </section>
      </>
    );
  }
}

export default BasicElements;
