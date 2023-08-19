import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Products_icons from "./Products_icons"

export default function Products() {
    return (
        <Container className="products">
            <Row className="products__title">
                <Col sm='12' className="caption">ВИДЫ ПРОДУКЦИИ</Col>
                <Col sm='12' className="desc">У нас широкий спектр задач, от визиток до подарочных изданий</Col>
            </Row>
            <Row className="products__content">
                <Col lg='3' sm='6' xs='12'><Products_icons title='Книги' image='images/products-icons/icon_1.svg'></Products_icons></Col>
                <Col lg='3' sm='6' xs='12'><Products_icons title='Брошюры' image='images/products-icons/icon_2.svg'></Products_icons></Col>
                <Col lg='3' sm='6' xs='12'><Products_icons title='Альбомы' image='images/products-icons/icon_4.svg'></Products_icons></Col>
                <Col lg='3' sm='6' xs='12'><Products_icons title='Листовки' image='images/products-icons/icon_4.svg'></Products_icons></Col>
                <Col lg='3' sm='6' xs='12'><Products_icons title='Плакаты' image='images/products-icons/icon_5.svg'></Products_icons></Col>
                <Col lg='3' sm='6' xs='12'><Products_icons title='Чертежи' image='images/products-icons/icon_6.svg'></Products_icons></Col>
                <Col lg='3' sm='6' xs='12'><Products_icons title='Фотографии' image='images/products-icons/icon_7.svg'></Products_icons></Col>
                <Col lg='3' sm='6' xs='12'><Products_icons title='Визитки' image='images/products-icons/icon_8.svg'></Products_icons></Col>
            </Row>
        </Container>
    )
}