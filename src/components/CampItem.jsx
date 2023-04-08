import React from 'react';
import {Button, Card, Container} from "react-bootstrap";

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
        <Container>
            <Card style={{width: '18rem'}}>
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
)
    ;
};

export default CampItem;