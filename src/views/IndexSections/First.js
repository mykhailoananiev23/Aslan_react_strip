import React, { useState, useEffect } from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class BasicElements extends React.Component {
  render() {

    const payment = () => {
      
    }

    return (
      <>
        <section className="section section-components mt-2 " id="section-components"
        >
          <Container>

            <Row >
              <Col >
                {/* Basic elements */}
                <h1 className="mb-1">
                  Take the next step to become financial free
                </h1>
                {/* Buttons */}
                <h2>
                  Simple. Effective. Results.
                </h2>

              </Col>
            </Row>
            {/* ???????//////////////////////////////////////////// */}
            <Row className="mt-6">
              <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                <div className="mb-1 p-3  bg-white rounded minH">
                  <div className="pb-2 pt-2 position-relative  d-flex justify-content-between" style={{ marginTop: "-0.9em" }}  >
                    <small className=" " style={{ marginTop: "-2em" }}>
                      Don't miss this opportunity
                    </small>
                    <small className=" bg-dark text-lighter pb-0 p-2 rounded mt-1 position-absolute right-0" style={{ top: "-2em" }}>
                      <i className="fa fa-hourglass-2 text-lighter"></i> Limited-time offer
                    </small>
                  </div>
                  <div className="d-flex justify-content-between UnderLine1 pb-2 pt-2">
                    <h2 className="d-flex justify-content-center align-items-center pb-2 pt-2">
                      Build
                    </h2>
                    <div >
                      <div className="d-flex">
                        <div className="pb-0  pb-1 d-flex justify-content-between flex-column">
                          <div></div>
                          <span className="rounded mb-0 pr-2 mr-3 pl-1" style={{ border: "2px solid black" }}>
                            <small style={{ fontSize: "14px" }}>-67.8%</small>
                          </span>
                        </div>
                        <div>
                          <h3 className="text-right w-100 mt-3 mb-0  text-sky text-across text-align-left">$2950</h3>
                          <h3 className="mb-0 text-sky ">$950</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="UnderLine1 pb-2 pt-1">

                    The Build package is designed for entrepreneurs and businesses looking to establish a strong foundation for their ventures. Whether you're a startup or entering a new market, this package provides essential resources and guidance to kickstart your business journey.
                  </div>
                  <div className="UnderLine1 pb-2 pt-2" >
                    <div className="d-flex  min_ ">
                      <i className="fa fa-check  pr-2 pt-2"></i>
                      <div>
                        <small className="EinaclassName">
                          Specific ideas for business to start with proven potential.
                        </small>
                      </div>
                    </div>
                    <div className="d-flex  min_">
                      <i className="fa fa-check  pr-2 pt-2"></i>
                      <div>
                        <small className="EinaclassName">
                          Selecting a business name, and making crucial early decisions.
                        </small>
                      </div>
                    </div>
                    <div className="d-flex  min_">
                      <i className="fa fa-check  pr-2 pt-2"></i>
                      <div>
                        <small className="EinaclassName">
                          Insights into market research and identifying your target audience.
                        </small>
                      </div>
                    </div>
                    <div className="d-flex  min_">
                      <i className="fa fa-check  pr-2 pt-2"></i>
                      <div>
                        <small className="EinaclassName">
                          Creating a brand identity and establishing an online presence.
                        </small>
                      </div>
                    </div>
                    <div className="d-flex  min_ mb-2">
                      <i className="fa fa-check  pr-2 pt-2"></i>
                      <div>
                        <small className="Eina01-Regular">
                          Resources to help you refine and develop your chosen business idea.
                        </small>
                      </div>
                    </div>
                  </div>
                  <Link to="/Build_Pay">
                    <Button className="w-100 pb-2 pt-2 " color="primary" type="button" >
                      Choose <br />
                      <small> <i className="fa fa-hourglass-2 text-lighter"></i> Limited-time offer</small>
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                <div className="mb-1 p-3  bg-white rounded minH">
                  <div className="pb-2 pt-2 position-relative  d-flex justify-content-between" style={{ marginTop: "-0.9em" }}  >
                    <small className="d-none " >
                      Don't miss this opportunity
                    </small>
                    <small className=" bg-dark text-lighter pb-0 p-2 rounded mt-1 position-absolute right-0" style={{ top: "-2em" }}>
                      <i className="fa fa-hourglass-2 text-lighter"></i> Limited-time offer
                    </small>
                  </div>
                  <div className="d-flex justify-content-between UnderLine1 pb-1 pt-2">
                    <h2 className="d-flex justify-content-center align-items-center pb-2 pt-2 ">
                      Grow
                    </h2>
                    <div >
                      <div className="d-flex">
                        <div className="pb-0  pb-1 d-flex justify-content-between flex-column">
                          <div></div>
                          <span className="rounded mb-0 pr-2 mr-3 pl-1" style={{ border: "2px solid black" }}>
                            <small style={{ fontSize: "14px" }}>-49.5%</small>
                          </span>
                        </div>
                        <div>
                          <h3 className="text-right w-100 mt-3 mb-0  text-sky text-across text-align-left">$5950</h3>
                          <h3 className="mb-0 text-sky ">$2950</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="UnderLine1 pb-2 pt-2">
                    <small className="Eina01-Regular">
                      The Grow package is tailored for businesses seeking to expand and scale their operations on a global scale. Whether you're entering new markets or aiming for increased market share, this package provides strategies and insights to foster sustainable growth.
                    </small>
                  </div>
                  <div className="UnderLine1 pb-2 pt-2 ">
                    <div className="d-flex  min_">
                      <i className="fa fa-check pr-2 pt-1"></i>
                      <div>
                        <small className="Eina01-Regular">
                          In-depth analysis of international market trends and consumer behavior.
                        </small>
                      </div>
                    </div>
                    <div className="d-flex  min_  ">
                      <i className="fa fa-check pr-2 pt-1"></i>
                      <div>
                        <small className="Eina01-Regular">
                          Marketing strategies adaptable to different cultures and regions.
                        </small>
                      </div>
                    </div>
                    <div className="d-flex  min_ ">
                      <i className="fa fa-check pr-2 pt-1"></i>
                      <div>
                        <small className="Eina01-Regular">
                          Scalable business practices and operational optimization tips.
                        </small>
                      </div>
                    </div>
                    <div className="d-flex  min_ mt-2 ">
                      <i className="fa fa-check pr-2 pt-1"></i>
                      <div>
                        <small className="Eina01-Regular">
                          Scientifically Proven Behaviors that Lead to Success
                        </small>
                      </div>
                    </div>
                    <div className="d-flex  min_ pb-2">
                      <i className="fa fa-check pr-2 pt-1"></i>
                      <div>
                        <small className="Eina01-Regular">
                          Sustained Growth Blueprint (100-Day Guide)
                        </small>
                      </div>
                    </div>
                  </div>
                  <Link to="/Grow_Pay">

                    <Button className="w-100 pb-2 pt-2 " onClick={payment} color="primary" type="button">
                      Choose <br />
                      <small> <i className="fa fa-hourglass-2 text-lighter"></i> Limited-time offer</small>
                    </Button>
                  </Link>
                </div>
              </Col>

              <Col lg="12" md="12" sm="12" xl="4" className="mt-5  " >
                <div className="mb-1 p-3  bg-white rounded minH">
                  <div className="position-relative  d-flex justify-content-between pb-3 pt-2 " style={{ marginTop: "-0.9em" }}  >
                    <small className="d-none " style={{ marginTop: "-2em" }}>
                      Don't miss this opportunity
                    </small>
                    <small className=" d-none bg-dark text-lighter pb-0 p-2 rounded mt-1 position-absolute right-0" style={{ top: "-2em" }}>
                      <i className="fa fa-hourglass-2 text-lighter"></i> Limited-time offer
                    </small>
                  </div>
                  <div className="d-flex justify-content-between UnderLine1 pb-2 pt-2">
                    <h2 className="d-flex justify-content-center align-items-center ">
                      Exit
                    </h2>
                    <div >
                      <div className="d-flex">
                        <div>
                          <div className="pb-0 pt-3 justify-content-between flex-column">
                            <div></div>
                            <img className=" rounded" style={{ width: "3em" }} src={"/img/theme/run.png"} />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-right w-100 mt-4 mb-0  text-sky text-across text-align-left"></h3>
                          <h3 className="mb-0 text-sky ">$8950</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="UnderLine1 pb-2 pt-2">
                    <small className="Eina01-Regular">
                      Businesses thinking about different exit options, like selling, merging, or acquiring, can use the Exit package. This package offers advice on the complex process of business exit, whether your goal is to realize your success or pursue new ventures.
                    </small>
                  </div>
                  <div className="UnderLine1 pb-2 pt-2 ">
                    <div className="d-flex  min_ ">
                      <i className="fa fa-check pt-1 pr-2"></i>
                      <div>
                        <small className="Eina01-Regular">
                          Access to professional business valuation services.
                        </small>
                      </div>
                    </div>
                    <div className="d-flex  min_">
                      <i className="fa fa-check pt-1 pr-2"></i>
                      <div>
                        <small className="Eina01-Regular">
                          Comprehensive guide on developing an effective exit strategy.
                        </small>
                      </div>
                    </div>
                    <div className="d-flex  min_">
                      <i className="fa fa-check pt-1 pr-2"></i>
                      <div>
                        <small className="Eina01-Regular">
                          Legal and financial consultations with professionals experienced in business exit transactions.
                        </small>
                      </div>
                    </div>
                    <div className="d-flex  min_">
                      <i className="fa fa-check pt-1 pr-2"></i>
                      <div>
                        <small className="Eina01-Regular">
                          Guidance on navigating mergers and acquisitions, educational materials on the M&A process
                        </small>
                      </div>
                    </div>
                    <div className="d-flex  min_ mb-2">
                      <i className="fa fa-check pt-1 pr-2 "></i>
                      <div>
                        <small className="Eina01-Regular">
                          Tax experts to offer services focused on tax planning during the exit process.

                        </small>
                      </div>
                    </div>
                  </div>
                  <Link to="/">
                  <Button className="w-100 pb-4 pt-3 " color="light" type="button">
                    Coming soon

                  </Button>
                  </Link>
                </div>
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
