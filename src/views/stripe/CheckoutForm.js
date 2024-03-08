import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link } from "react-router-dom";
import { Button, Card, CardHeader, CardBody, Form, Container, Row, Col } from "reactstrap";

const CheckoutForm = ({ price }) => {
    const [paymentMethod, setPaymentMethod] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    // const [amount, setAmount] = useState(0); // State to hold the payment amount
    const handleCardSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if (error) {
            console.error(error);
        } else {
            // Send payment details to your server
            const response = await fetch('/api/charge', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: price,
                    payment_method: paymentMethod.id,
                }),
            });

            if (response.ok) {
                console.log('Payment successful!');
            } else {
                console.error('Payment failed:', await response.text());
            }
        }
    };
// Function to handle amount input
 
    return (
        <div style={{ height: "100vh" }}>
            <section className="section">
                <Container>
                    <Row className="justify-content-center" style={{ paddingTop: "15vh" }}>
                        <Col lg="10" md="12" sm="12" xs="12" xl="6" >
                            <Card className="bg-secondary shadow border-0">
                                <CardHeader className="bg-sky pb-1">
                                    <h5 className='text-white text-center '>Pay with Credit Card</h5>
                                </CardHeader>
                                <CardBody>
                                    <h2 className='text-center text-primary mb-5'>You will Pay : ${price}</h2>

                                    <Form role="form" onSubmit={handleCardSubmit}>
                                        <div className="pl-4 pr-4 custom-control-alternative custom-checkbox">
                                            <div className="text-left text-muted mb-1">
                                                <small>Input your Payment Info:</small>
                                            </div>
                                            <CardElement className="card-element input-group-alternative mb-3" />
                                        </div>
                                        <div className="text-right mx-4 mt-5 d-flex justify-content-between">
                                            <Link className="text-gray pt-3 " to="/">
                                                <small>Back Home</small>
                                            </Link>
                                            <Button type="submit" disabled={!stripe} className="w-25" color="primary">
                                                Pay
                                            </Button>
                                        </div>
                                    </Form>
                                    {paymentMethod && (
                                        <div>
                                            <h3>Payment Successful!</h3>
                                            <p>Payment Method: {paymentMethod.type}</p>
                                        </div>
                                    )}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default CheckoutForm;
