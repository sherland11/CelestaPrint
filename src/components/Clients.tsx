import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Clients() {
    return (
        <Container className="clients">
            <Row className="clients__title">
                <Col sm="12" className="caption">НАШИ КЛИЕНТЫ</Col>
            </Row>

            <Row className="clients__content">
                <Col md="2" sm="4" xs="6" className="clients__logo clients__logo1"><img src="images/clients-logo/1.jpg" alt="Crop and Highlight"/></Col>
                <Col md="2" sm="4" xs="6" className="clients__logo clients__logo2"><img src="images/clients-logo/2.jpg" alt="N"/></Col>
                <Col md="2" sm="4" xs="6" className="clients__logo clients__logo3"><img src="images/clients-logo/3.jpg" alt="Miiissy"/></Col>
                <Col md="2" sm="4" xs="6" className="clients__logo clients__logo4"><img src="images/clients-logo/4.jpg" alt="Peppermint"/></Col>
                <Col md="2" sm="4" xs="6" className="clients__logo clients__logo5"><img src="images/clients-logo/5.jpg" alt="Pixel Labs"/></Col>
                <Col md="2" sm="4" xs="6" className="clients__logo clients__logo6"><img src="images/clients-logo/6.jpg" alt="Marnie"/></Col>
            </Row>
        </Container>
    )
}