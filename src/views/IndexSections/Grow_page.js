import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import DemoNavbar from "../../components/Navbars/DemoNavbar.js";

class BasicElements extends React.Component {
  render() {
    return (
      <>
        <DemoNavbar />
        <section className="section section-components " id="section-components"
        >
          <Container>


            <h1 className="mb-1">
              <b>Grow</b>
            </h1>
            {/* Buttons */}
            <h2>
            The Grow package is tailored for businesses seeking to expand and scale their operations on a global scale.
            </h2>

            {/* ???????//////////////////////////////////////////// */}
            <Row className="mt-6">
              <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                   <img className="w-100 pt-0" src={"/img/icon/cover_Grow.png"} />
                <div className="mb-1 p-3  bg-white rounded minH">

              

                  <div className="text-center pt-2">
                    <Link to="/build">
                      <Button className=" rounded w-30 mr-5 text-center" color="dark" type="button">
                      <i className="fa fa-eye " style={{fontSize:"40px"}}></i>
                      </Button>
                    </Link>
                    <Link to="/build">
                      <Button className="w-30  text-center"  color="primary" type="button">
                      <i className="fa fa-arrow-circle-down " style={{fontSize:"40px"}}></i>
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                <div className="mb-1 p-3  bg-white rounded minH">

                  <div className="  pb-2 pt-5">
                    <h2 className="text-center ">
                      <b>Scientifically</b>
                    </h2>
                    <h2 className="text-center pb-4 mb-4">
                   <b>Behaviors</b> 
                    </h2>
                  </div>

                  <div className="UnderLine1 pb-7 pt-5 text-center" >
                    <img style={{ width: "33%" }} src={"/img/icon/brain.png"} />

                  </div>
                  <div className="text-center pt-3 pb-1">
                    <Link to="/build">
                      <Button className=" rounded w-30 mr-5 text-center" color="dark" type="button">
                      <i className="fa fa-eye " style={{fontSize:"40px"}}></i>
                      </Button>
                    </Link>
                    <Link to="/build">
                      <Button className="w-30  text-center"  color="primary" type="button">
                      <i className="fa fa-arrow-circle-down " style={{fontSize:"40px"}}></i>
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col> <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                <div className="mb-1 p-3  bg-white rounded minH">

                  <div className="  pb-3 pt-5">
                    <h2 className="text-center ">
                      <b>Day 31 to day 50 </b>
                    </h2>
                    <h3 className="text-center pb-4 mb-4">
                     <br/>
                    </h3>
                  </div>

                  <div className="UnderLine1 pb-7 pt-5 text-center" >
                  <img style={{ width: "33%" }} src={"/img/icon/calender.png"} />


                  </div>
                  <div className="text-center pt-3 pb-1">
                    <Link to="/build">
                      <Button className=" rounded w-30 mr-5 text-center" color="dark" type="button">
                      <i className="fa fa-eye " style={{fontSize:"40px"}}></i>
                      </Button>
                    </Link>
                    <Link to="/build">
                      <Button className="w-30  text-center"  color="primary" type="button">
                      <i className="fa fa-arrow-circle-down " style={{fontSize:"40px"}}></i>
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mt-6">
              <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                <div className="mb-1 p-3  bg-white rounded minH">

                  <div className="  pb-3 pt-5">
                    <h2 className="text-center ">
                      <b>100-day guide</b>
                    </h2>
                    <h3 className="text-center pb-4 mb-4">
                     <br/>
                    </h3>
                  </div>

                  <div className="UnderLine1 pb-7 pt-5 text-center" >
                    <img style={{ width: "33%" }} src={"/img/icon/earth.png"} />

                  </div>
                  <div className="text-center pt-2">
                    <Link to="/build">
                      <Button className=" rounded w-30 mr-5 text-center" color="dark" type="button">
                      <i className="fa fa-eye " style={{fontSize:"40px"}}></i>
                      </Button>
                    </Link>
                    <Link to="/build">
                      <Button className="w-30  text-center"  color="primary" type="button">
                      <i className="fa fa-arrow-circle-down " style={{fontSize:"40px"}}></i>
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
               <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
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
                    <Link to="/build">
                      <Button className=" rounded w-30 mr-5 text-center" color="dark" type="button">
                      <i className="fa fa-eye " style={{fontSize:"40px"}}></i>
                      </Button>
                    </Link>
                    <Link to="/build">
                      <Button className="w-30  text-center"  color="primary" type="button">
                      <i className="fa fa-arrow-circle-down " style={{fontSize:"40px"}}></i>
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
               
              </Col>
            </Row>

            {/*              
                <Button
                  className="text-danger ml-1"
                  color="link"
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
