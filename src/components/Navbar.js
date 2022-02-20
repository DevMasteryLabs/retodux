import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export default function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img src="/img/todo-logo.png" alt="" width={50} />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">My Todos</Nav.Link>
                    <Nav.Link href="#features">New Todo</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
