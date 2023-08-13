import React, { useState } from 'react'
import { Container, Row, Col, Navbar, Nav,  } from 'react-bootstrap'
import Burger from './Burger'
import '../css/burger.css'

export default function Header() {

    const [openBurger, setOpenBurger] = useState<boolean>(false)

    return (
        <Container className='header container'>
            
            <Row className='header__content'>
                <Col className='header__navbar' sm='4'>
                    <Navbar className="">
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbar-nav" />
                            <Navbar.Collapse id="navbar-nav">
                                <Nav className='header__nav'>
                                    <Nav.Link href='#makeOrder'>Цены</Nav.Link>
                                    <Nav.Link href='#example'>Примеры</Nav.Link>
                                    <Nav.Link href='#conditions'>Требования к макетам</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>

                <Col className='header__title align-self-center' sm='4'>palette_print</Col>

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

                <Col className='header__burger-btn' sm="8"><img src="images/burger-button.svg" alt="Кнопка открытия меню" onClick={() => setOpenBurger(!openBurger)} /></Col>
            </Row>

            <Row className='header__text'>
                <Col md='7' sm='12' className='header__text-title mb-5'>ТИПОГРАФИЯ ПОЛНОГО ЦИКЛА</Col>
                <Col sm='10' className='header__text-subTitle'>
                    Мы специализируемся на печати книг, брошюр и альбомов. Мы следим за качеством технического оснащения типографии, выполняем все стадии печатных работ.
                </Col>
            </Row>

            <div className={openBurger ? "header__burger header__burger_show" : "header__burger"}><Burger setOpenBurger={setOpenBurger}></Burger></div>
        
        </Container>
    )
}