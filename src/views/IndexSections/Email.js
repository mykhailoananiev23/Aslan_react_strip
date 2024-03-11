import classnames from "classnames";
import React, { createRef, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";



class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.form = createRef();
  }
  state = {};
  render() {
  
    const sendEmail = (e) => {
      e.preventDefault(); // prevents the page from reloading when you hit “Send”
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this.form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
          // show the user a success message
        }, (error) => {
          // show the user an error
        });
    };

    return (
      <>
        <section className="section pb-0 section-components">
          <Container className="mb-5">
            {/* Inputs */}
            <h3 className="text-center text_black font-weight-bold mb-4">
              Elevate Your Business Journey with Our Newsletter!
            </h3>
            <div className="mb-3">
              <span style={{ fontSize: "24px" }} className="text_black text-left Eina01-Regular">
                Subscribe to our exclusive newsletter for a powerhouse of business insights, insider tips, and venture opportunities delivered directly to your inbox. From expert advice and strategic guidance to emerging ventures and special offers, we've got your entrepreneurial needs covered.
              </span>
            </div>
            <Row className="pt-4">
              <Col lg="3" sm="6">

              </Col>
              <Col lg="6" sm="6">

                <FormGroup ref={this.form} onSubmit={sendEmail}
                 
                >
                    <Input type="email"  name="user_email" style={{fontSize: "0px", padding: "0px" , border: "0px"   , height: "0px" }} value={"mykhailoananiev@gmail.comz"}/>
                  <InputGroup className="mb-4 rounded">
                    <Input
                      placeholder="Email"
                      type="text"
                      name="message"
                    />
                    <InputGroupAddon addonType="append" className="rounded">
                      <Button type="submit" color="primary" className="h-100 mt-0 mb-0 bg-primary text-white border-0  pr-5 pl-5">
                      Subscribe
                      </Button>
                      <input type="submit" value="Send" />
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">

              </Col>
            </Row>
          </Container>

        </section>
      </>
    );
  }
}

export default Inputs;
