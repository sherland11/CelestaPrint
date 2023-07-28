import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <Container className="footer">
            <Row className="footer__content">
                <Col sm="12" className="footer__text">© 2023 palette_print</Col>
            </Row>
        </Container>
    )
}