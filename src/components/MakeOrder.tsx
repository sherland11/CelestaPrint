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
                    <form className="my-form">
                        <div className="input-group">
                            <input type="text" className="my-input" />
                            <label className="my-placeholder">Ваше имя</label>    
                        </div>
                    </form> 
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
                        <Form.Group>
                            <Form.Label className="mb-3">Загрузите файл</Form.Label>
                            <Form.Control as="button" type="button" className="makeOrder__file-btn">загрузить файл</Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="mb-4">Доставка заказа</Form.Label>
                            <Form.Check 
                                type="radio"
                                label="Без доставки"
                                name="deliveryRadio"
                                className="mb-1"
                            />
                            <Form.Check 
                                type="radio"
                                label="Доставка внутри МКАД (400р) = 400"
                                name="deliveryRadio"
                                className="mb-1"
                            />
                            <Form.Check 
                                type="radio"
                                label="Доставка за пределы МКАД (600р) = 600"
                                name="deliveryRadio"
                            />
                        </Form.Group>
                        <Button type="submit" className="makeOrder__submit">Сделать заказ</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}