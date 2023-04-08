import React from 'react';
import {Button, Card, Col, Container} from "react-bootstrap";

const CampItem = ({camp}) => {
    const campName = "camp1"
    const fields =
        [
            'type',
            'oblast',
            'district',
            'street',
            'houseNumber',
            'price',
            'description',
            'food'
        ]
    return (
        // <Container className={'d-flex justify-content-center'}>
        <Col lg={6} md={9} sm={12} xs={12}>
            <Container className={'mt-3'}>
                <Card style={{width: '100%'}}>
                    <Card.Body>
                        <Card.Title>{camp.name}</Card.Title>
                        <Card.Text>
                            {camp.oblast}, {camp.district}
                        </Card.Text>
                        <Card.Text>
                            {camp.price}
                        </Card.Text>
                        <Card.Text>
                            {camp.description}
                        </Card.Text>

                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>


            </Container>
        </Col>
        // </Container>
    )
        ;
};

export default CampItem;