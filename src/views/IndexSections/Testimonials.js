/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Row, Col, Container } from "reactstrap";

class Typography extends React.Component {
  render() {
    return (
      <>
        <section
          className="section section-components pt-6 "
        >
          <Container>
            <Row className=" align-items-center UnderLine2">
              <Col xl="4" lg="12" md="12" sm="12">
                <span className="text_black font-weight-bold " style={{fontSize: "40px",  fontFamily:" Bona Nova"}}>
                  Testimonials
                </span>
              </Col>
              <Col xl="8" lg="12" md="12" sm="12" ></Col>
            </Row >
            <Row className=" align-items-center UnderLine2 pt-3 pb-3 d-flex position-relative  d-flex justify-content-center">
              <Col xs="5" lg="2" md="3" sm="3" xl="2" className="pl-0 pr-0" >
                <img className="d-block w-80 rounded" src={"/img/theme/human1.png"} alt="" data-xblocker="passed " />
              </Col>
              <Col xs="7" lg="10" md="9" sm="9" xl="3" className="pl-0 pr-0">

                <div className="text_black Test_div1">
                  <i className='fa fa-shopping-bag' ></i>  Build, Grow
                </div>
                <div className="text_black Test_div2 ">
                  Marius Voss
                </div>
                <div className="text_black Test_div3">
                  <b> bikon-as.no</b>
                </div>
              </Col>
              <Col xs="12" lg="12"  md="12" sm="12" xl="7" className="pl-0 pr-0 pt-3">

                <span style={{fontSize:"15px"}} className="text_black Eina01-Regular">
                  "Having spent my entire career in the conventional 9 to 5 routine, I stumbled upon a video on social media that showcased real results and genuine testimonials. Intrigued, I decided to invest in the 'Build' plan. The step-by-step instructions provided a clear roadmap, alleviating the apprehension that often comes with starting a new venture.
                </span >
                <br />
                <span style={{fontSize:"15px"}} className="text_black Eina01-Regular">
                  As I successfully got my business off the ground, I found myself at a crossroads, unsure of the next steps. That's when I opted for the 'Grow' plan. It wasn't about flashy promises; instead, it felt like a practical guide to navigate the challenges of business expansion. Today, I believe my company is heading in the right direction. The journey ahead requires dedication and resilience, but I'm grateful for the guidance that helped me gain confidence in charting my own course.
                  "</span >
              </Col>
            </Row>
            <Row className=" align-items-center UnderLine2 pt-3 pb-3 d-flex position-relative  d-flex justify-content-center">
              <Col xs="5"  lg="2" xm="2" md="3" sm="3" xl="2" className="pl-0 pr-0" >
                <img className="d-block w-80 rounded" src={"/img/theme/human2.png"} alt="" data-xblocker="passed " />
              </Col>
              <Col xs="7"  lg="10"xm="10"  md="9" sm="9" xl="3" className="pl-0 pr-0">

                <div className="text_black Test_div1">
                  <i className='fa fa-shopping-bag' ></i>  Build, Grow
                </div>
                <div className="text_black Test_div2 ">
                Philip Hörnqvist
                </div>
                <div className="text_black Test_div3">
                  <b> warbls.com</b>
                </div>
              </Col>
              <Col xs="12" lg="12"xm="12"  md="12" sm="12" xl="7" className="pl-0 pr-0 pt-3 ">

                <span style={{fontSize:"15px"}} className="text_black Eina01-Regular Eina01-Regular">
                  "The Build and Grow packages were a game-changer for my vocal services business. The 30-day step-by-step plan provided clarity and confidence, while the advanced strategies and 100-day guide in the Grow package fueled sustained growth. Thanks to CarteTheBlanche, my business has transformed from concept to thriving venture.
                  "</span >
              </Col>
            </Row>  <Row className=" align-items-center UnderLine2 pt-3 pb-3 d-flex position-relative  d-flex justify-content-center">
              <Col xs="5"  lg="2" md="3" sm="3" xl="2" className="pl-0 pr-0" >
                <img className="d-block w-80 rounded" src={"/img/theme/human3.png"} alt="" data-xblocker="passed " />
              </Col>
              <Col xs="7"  lg="10" md="9" sm="9" xl="3" className="pl-0 pr-0 pt-3">

                <div className="text_black  Test_div1">
                  <i className='fa fa-shopping-bag' ></i>  Build
                </div>
                <div className="text_black Test_div2 ">
                Sarah Loftus
                </div>
                <div className="text_black Test_div3">
                  <b>sistaknit.com</b>
                </div>
              </Col>
              <Col xs="12" lg="12" md="12" sm="12" xl="7" className="pl-0 pr-0 pt-3 pt-3 Eina01-Regular">

                <span style={{fontSize:"15px"}} className="text_black Eina01-Regular">
                  "CarteTheBlanche guided me seamlessly into the knitting pattern market. From finding the perfect business idea to setting up effective marketing, the knowledge from the package ensured I made my first sale within a week. "
                </span >


              </Col>
            </Row>  <Row className=" align-items-center UnderLine2 pt-3 pb-3 d-flex position-relative  d-flex justify-content-center">
              <Col xs="5"  lg="2" md="3" sm="3" xl="2" className="pl-0 pr-0" >
                <img className="d-block w-80 rounded" src={"/img/theme/human4.png"} alt="" data-xblocker="passed " />
              </Col>
              <Col xs="7"  lg="10" md="9" sm="9" xl="3" className="pl-0 pr-0">

                <div className=" text_black Test_div1 ">
                  <i className='fa fa-shopping-bag' ></i>  Build, Grow
                </div>
                <div className="text_black Test_div2 ">
                Kim Vu Nguyen
                </div>
                <div className="text_black Test_div3">
                  <b> neat.no</b>
                </div>
              </Col>
              <Col xs="12" lg="12" md="12" sm="12" xl="7" className="pl-0 pr-0 pt-3 ">

                <span style={{fontSize:"15px"}} className="text_black Eina01-Regular">
                  "Not much to say - but... this changed my life."
                </span >
              </Col>
            </Row>
          </Container>
        </section>

      </>
    );
  }
}

export default Typography;
