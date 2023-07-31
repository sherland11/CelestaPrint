import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function MakeOrder() {
    const [emailValue, setEmailValue] = useState<string>("")

    return (
        <Container className="makeOrder">
            <Row className="makeOrder__title">
                <Col className="caption" sm="12">СДЕЛАЙТЕ ЗАКАЗ</Col>
                <Col className="desc" sm="8">Отправьте контакты, информацию о своем заказе и загрузите макет. Мы свяжемся с вами для подтверждения и уточнения деталей заказа.</Col>
            </Row>

            <Row className="makeOrder__form">
                <Col sm="12">
                    <form className="my-form">
                        <div className="makeOrder__form-group">
                            <input type="text" className="makeOrder__form-input" required />
                            <label className="makeOrder__form-placeholder">Ваше имя</label>    
                        </div>
                        <div className="makeOrder__form-group">
                            <input type="email" className="makeOrder__form-input"  value={emailValue} onChange={(e) => setEmailValue(e.target.value)} required />
                            <label className={emailValue.length > 0 ? "makeOrder__form-placeholder makeOrder__form-placeholder_emailEnable" : "makeOrder__form-placeholder"} >Ваш email</label>
                        </div>

                        <div className="makeOrder__form-group">
                            <textarea className="makeOrder__form-input" required />
                            <label className="makeOrder__form-placeholder">Комментарий к заказу</label>
                        </div>

                        <label htmlFor="makeOrder__file-btn" className="makeOrder__file-title-label">Загрузите файл</label>
                        <br />
                        <input type="button" className="makeOrder__file-btn" id="makeOrder__file-btn" value="загрузить файл" />

                        <div className="makeOrder__radio-group">
                            <div className="makeOrder__file-title-label">Доставка заказа</div>
                            <input type="radio" className="makeOrder__radio mb-2" value="без" name="deliveryRadio" id="radio1" />
                            <label htmlFor="radio1" className="makeOrder__radio-label">Без доставки</label>
                            <br />
                            <input type="radio" className="makeOrder__radio mb-2" value="МКАД" name="deliveryRadio" id="radio2" />
                            <label htmlFor="radio2" className="makeOrder__radio-label">Доставка внутри МКАД (400р) = 400</label>
                            <br />
                            <input type="radio" className="makeOrder__radio" value="ЗаМКАД" name="deliveryRadio" id="radio3" />
                            <label htmlFor="radio3" className="makeOrder__radio-label">Доставка за пределы МКАД (600р) = 600</label>
                        </div>

                        <input type="submit" className="makeOrder__submit" value="Сделать заказ" />
                    </form> 
                </Col>
            </Row>
        </Container>
    )
}