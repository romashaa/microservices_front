import React from 'react';
import {Button, Form} from "react-bootstrap";

const AddAdmin = () => {
    return (
        <div>
            <div className="container form" >
                <h2 className='col-7 m-auto mt-5'>Додавання адміну</h2>
                <Form className='col-7 m-auto'>
                    <Form.Group className="mb-3">
                        <Form.Label className="formLabel">Ім'я*</Form.Label>
                        <Form.Control style={{fontSize:"18px"}} className="formField" type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="formLabel">Прізвище*</Form.Label>
                        <Form.Control style={{fontSize:"18px"}} className="formField" type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="formLabel">Пошта*</Form.Label>
                        <Form.Control placeholder="email@email.com" style={{fontSize:"18px"}} className="formField" type="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="formLabel">Телефон*</Form.Label>
                        <Form.Control style={{fontSize:"18px"}} className="formField" type="text"/>
                    </Form.Group>


                    <Button variant="primary" type="submit" className="mb-3">
                        Опублікувати
                    </Button>

                </Form>
            </div>
        </div>
    );
};

export default AddAdmin;