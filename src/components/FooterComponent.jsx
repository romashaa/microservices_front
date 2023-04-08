import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const FooterComponent = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <Container>
                <Row>
                    <Col md={6}>
                        <p className="text-light">© 2020 Copyright BOOKCAMP</p>
                    </Col>
                    <Col md={6}>
                        <p className="text-light text-md-right">Замовляйте табори з радістю!</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FooterComponent;