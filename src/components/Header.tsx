import React, { useState } from 'react'
import { Container, Row, Col, Navbar, Nav,  } from 'react-bootstrap'
import Burger from './Burger'
import '../css/burger.css'

export default function Header() {

    const [openBurger, setOpenBurger] = useState<boolean>(false)

    if (openBurger) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }

    return (
        <Container className='header container'>
            
            <Row className="header__content">
                <Col className='header__navbar' sm='4'>
                    <Navbar className="">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbar-nav" />
                            <Navbar.Collapse id="navbar-nav">
                                <Nav className='header__nav'>
                                    <Nav.Link href='#makeOrder'>Цены</Nav.Link>
                                    <Nav.Link href='#example'>Примеры</Nav.Link>
                                    <Nav.Link href='#conditions'>Требования</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>

                <Col className='header__title align-self-center' sm='4'>CelestaPrint</Col>

                <Col className='header__contacts' sm='2'>
                    <ul className=''>
                        <li>+123 356 78 677</li>
                        <li>Лучников пер., 4 стр. 12</li>
                        <li>Пн-птн: 10:00 - 20:00	</li>
                    </ul>
                </Col>

                <Col className="header__button align-self-center" sm='2'>
                    <a href='#makeOrder'>Оформить заказ</a>
                </Col>

            </Row>
            
            <Row className='header__burger-btn' sm="8"><img src="images/burger-button.svg" alt="Кнопка открытия меню" onClick={() => setOpenBurger(!openBurger)} /></Row>

            <div className={openBurger ? "header__burger header__burger_show" : "header__burger"}><Burger setOpenBurger={setOpenBurger}></Burger></div>
        
        </Container>
    )
}