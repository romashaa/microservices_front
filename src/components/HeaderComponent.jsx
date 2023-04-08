import React, { useState } from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <Navbar bg="light" expand="md" className="header">
            <Navbar.Brand href="/" className="headerBrand">BOOKCAMP</Navbar.Brand>
            <Navbar.Toggle onClick={handleMobileMenuToggle} />
            <Navbar.Collapse className="justify-content-end" isOpen={isMobileMenuOpen}>
                <Nav className="mr-auto">
                    <Nav.Link className="headerMenuItem" href="/allAdmins">Всі адміни</Nav.Link>
                    <Nav.Link className="headerMenuItem" href="/allCamps">Всі табори</Nav.Link>
                    <Nav.Link className="headerMenuItem" href="/addAdmin">Додати адміна</Nav.Link>
                    <Nav.Link className="headerMenuItem" href="/addCamp">Додати табір</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderComponent;