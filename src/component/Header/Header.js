import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="*">Language Club</Navbar.Brand>
                    <Nav className="me-auto">
                        <Stack direction="horizontal" gap={3}>
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/service">Service</NavLink>
                            <NavLink to="/details">Details</NavLink>
                            <NavLink to="/about">About</NavLink>

                        </Stack>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;