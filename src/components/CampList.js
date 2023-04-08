import React, {useEffect, useState} from 'react';
import CampItem from "./CampItem";
import {Row} from "react-bootstrap";

const CampList = () => {
    const [camps, setCamps] = useState([])
    const fieldNames = [
        'name',
        'admin',
        'type',
        'oblast',
        'district',
        'street',
        'houseNumber',
        'price',
        'description',
        'food'
    ];

    const campList = [

        {
            [fieldNames[0]]: 'Object 2 Name',
            [fieldNames[1]]: 'Object 2 Admin',
            [fieldNames[2]]: 'Object 2 Type',
            [fieldNames[3]]: 'Object 2 Oblast',
            [fieldNames[4]]: 'Object 2 District',
            [fieldNames[5]]: 'Object 2 Street',
            [fieldNames[6]]: 'Object 2 House Number',
            [fieldNames[7]]: 'Object 2 Price',
            [fieldNames[8]]: 'Object 2 Description',
            [fieldNames[9]]: 'Object 2 Food',
        },
        {
            [fieldNames[0]]: 'Object 3 Name',
            [fieldNames[1]]: 'Object 3 Admin',
            [fieldNames[2]]: 'Object 3 Type',
            [fieldNames[3]]: 'Object 3 Oblast',
            [fieldNames[4]]: 'Object 3 District',
            [fieldNames[5]]: 'Object 3 Street',
            [fieldNames[6]]: 'Object 3 House Number',
            [fieldNames[7]]: 'Object 3 Price',
            [fieldNames[8]]: 'Object 3 Description',
            [fieldNames[9]]: 'Object 3 Food',
        },
        {
            [fieldNames[0]]: 'Object 3 Name',
            [fieldNames[1]]: 'Object 3 Admin',
            [fieldNames[2]]: 'Object 3 Type',
            [fieldNames[3]]: 'Object 3 Oblast',
            [fieldNames[4]]: 'Object 3 District',
            [fieldNames[5]]: 'Object 3 Street',
            [fieldNames[6]]: 'Object 3 House Number',
            [fieldNames[7]]: 'Object 3 Price',
            [fieldNames[8]]: 'Object 3 Description',
            [fieldNames[9]]: 'Object 3 Food',
        },
    ];
    useEffect(()=>{
        // тут фетч fetchCamps.then(camps => setCamps(camps))

        //Заглушка
        setCamps(campList)
    }, [])
    return (
        <Row className="d-flex m-auto ">
            {
        camps.map(camp=> <CampItem key = {camp.name} camp = {camp}/>)

            }
        </Row>
    );
};

export default CampList;