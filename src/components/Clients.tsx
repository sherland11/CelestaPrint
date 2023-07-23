import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Clients() {
    return (
        <Container className="clients">
            <Row className="clients__title">
                <Col sm='12' className="caption">НАШИ КЛИЕНТЫ</Col>
            </Row>

            <Row className="clients__content">
                <Col sm='2' className="clients__logo"><img src="images/clients-logo/1.jpg" alt="Crop and Highlight"/></Col>
                <Col sm='2' className="clients__logo"><img src="images/clients-logo/2.jpg" alt="N"/></Col>
                <Col sm='2' className="clients__logo"><img src="images/clients-logo/3.jpg" alt="Miiissy"/></Col>
                <Col sm='2' className="clients__logo"><img src="images/clients-logo/4.jpg" alt="Peppermint"/></Col>
                <Col sm='2' className="clients__logo"><img src="images/clients-logo/5.jpg" alt="Pixel Labs"/></Col>
                <Col sm='2' className="clients__logo"><img src="images/clients-logo/6.jpg" alt="Marnie"/></Col>
            </Row>
        </Container>
    )
}