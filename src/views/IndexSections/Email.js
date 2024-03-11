import React from "react";
import classnames from "classnames";
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
  state = {};
  render() {
    return (
      <>
        <section className="section pb-0 section-components">
          <Container className="mb-5">
            {/* Inputs */}
            <h3 className="text-center text_black font-weight-bold mb-4">
              Elevate Your Business Journey with Our Newsletter!
            </h3>
            <div className="mb-3">
              <span style={{fontSize:"24px"}} className="text_black text-left Eina01-Regular">
                Subscribe to our exclusive newsletter for a powerhouse of business insights, insider tips, and venture opportunities delivered directly to your inbox. From expert advice and strategic guidance to emerging ventures and special offers, we've got your entrepreneurial needs covered.
              </span>
            </div>
            <Row className="pt-4">
              <Col lg="3" sm="6">

              </Col>
              <Col lg="6" sm="6">

                <FormGroup
                  className={classnames({
                    focused: this.state.birthdayFocused,
                  })}
                >
                  <InputGroup className="mb-4">
                    <Input
                      placeholder="Email"
                      type="text"
                      onFocus={(e) => this.setState({ birthdayFocused: true })}
                      onBlur={(e) => this.setState({ birthdayFocused: false })}
                    />
                    <InputGroupAddon addonType="append">
                      <Button  color="primary" className="h-100 mt-0 mb-0" type="button">
                      Subscribe
                      </Button>
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
