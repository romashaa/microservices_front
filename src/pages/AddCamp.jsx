import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const AddCamp = () => {

    const [name, setName] = useState('');
    const [admin, setAdmin] = useState('');
    const [type, setType] = useState('');
    const [oblast, setOblast] = useState('');
    const [district, setDistrict] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [food, setFood] = useState('');


    return (
        <div className="container form" >
            <h2 className='col-7 m-auto mt-5'>CТВОРЕННЯ ТАБОРУ</h2>
            <Form className='col-7 m-auto'>
                <Form.Group className="mb-3">
                    <Form.Label className="formLabel">Назва*</Form.Label>
                    <Form.Control style={{fontSize:"18px"}} className="formField" type="text"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="formLabel">Адміністратор*</Form.Label>
                    <Form.Control style={{fontSize:"18px"}} className="formField" type="text"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label className="formLabel">Тип населеного пункту*</Form.Label>
                    <Form.Select style={{fontSize:"18px"}} className="formField" aria-label="Default select example">
                        <option>Оберіть зі списку</option>
                        <option value="1">Місто</option>
                        <option value="2">Селище міського типу</option>
                        <option value="3">Село</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="formLabel">Назва населеного пункту*</Form.Label>
                    <Form.Control style={{fontSize:"18px"}} className="formField" type="text"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="formLabel">Область</Form.Label>
                    <Form.Select style={{fontSize:"18px"}} className="formField" aria-label="Default select example">
                        <option>Оберіть зі списку</option>
                        <option value="1">Вінницька область</option>
                        <option value="2">Київська область</option>
                        <option value="3">Полтавська область</option>
                        <option value="4">Львівська область</option>
                        <option value="5">Чернігівська область</option>
                        <option value="6">Луганська область</option>
                        <option value="7">Харківська область</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="formLabel">Район</Form.Label>
                    <Form.Control style={{fontSize:"18px"}} className="formField" type="text"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="formLabel">Вулиця*</Form.Label>
                    <Form.Control style={{fontSize:"18px"}} className="formField" type="text"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="formLabel">Номер дому</Form.Label>
                    <Form.Control style={{fontSize:"18px"}} className="formField" type="text"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="formLabel">Ціна*</Form.Label>
                    <Form.Control style={{fontSize:"18px"}} className="formField" type="text"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className="formLabel">Опис табору*</Form.Label>
                    <Form.Control style={{fontSize:"18px"}} as="textarea"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label className="formLabel">Їжа та розміщення*</Form.Label>
                    <Form.Control style={{fontSize:"18px"}} as="textarea"/>
                </Form.Group>

                <Button variant="primary" type="submit" className="mb-3">
                    Submit
                </Button>

            </Form>
        </div>
    );
};

export default AddCamp;