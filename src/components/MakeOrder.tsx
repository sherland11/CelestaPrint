import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function MakeOrder() {
    return (
        <Container className="makeOrder">
            <Row className="makeOrder__title">
                <Col className="caption" sm="12">СДЕЛАЙТЕ ЗАКАЗ</Col>
                <Col className="desc" sm="8">Отправьте контакты, информацию о своем заказе и загрузите макет. Мы свяжемся с вами для подтверждения и уточнения деталей заказа.</Col>
            </Row>

            <Row className="makeOrder__form">
                <Col sm="12">
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Ваше имя" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Ваш email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="textarea" rows={1} placeholder="Комментарий к заказу" />
                        </Form.Group>
                        <Form.Group></Form.Group>
                        <Form.Group></Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}