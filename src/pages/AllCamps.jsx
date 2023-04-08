import React from 'react';
import FooterComponent from "../components/FooterComponent";
import marshmallow from '../images/marshmallow.jpg'
import {Button} from "react-bootstrap";
import CampList from "../components/CampList";

const AllCamps = () => {
    return (
        <div>
            <div style={{position:"relative"}}>
                <img
                    src={marshmallow}
                    alt="marshmallow"
                    style={{ width: '100%', height: 'auto' }}
                />

                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    padding: '10px',
                    borderRadius: '5px',
                    textAlign: 'center'
                }}>
                    <h1>Найкращі табори за найкращими цінами!</h1>
                    <Button variant="success"> Дивитись табори</Button>
                </div>
            </div>

            <CampList/>
            <FooterComponent/>
        </div>
    );
};

export default AllCamps;