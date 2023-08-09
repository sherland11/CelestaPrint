import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function MakeOrder() {
    const [emailValue, setEmailValue] = useState<string>("")

    return (
        <Container className="makeOrder" id="makeOrder">
            <Row className="makeOrder__title">
                <Col className="caption" sm="12">СДЕЛАЙТЕ ЗАКАЗ</Col>
                <Col className="desc" sm="12">Отправьте контакты, информацию о своем заказе и загрузите макет. Мы свяжемся с вами для подтверждения и уточнения деталей заказа. Цена формируется индивидуально, в зависимости от сложности заказа.</Col>
            </Row>

            <Row className="makeOrder__form-container">
                <Col sm="12">
                    <form className="makeOrder__form">
                        <div className="makeOrder__form-group">
                            <input type="text" className="makeOrder__form-input" required />
                            <label className="makeOrder__form-placeholder">Ваше имя</label>    
                        </div>
                        <div className="makeOrder__form-group">
                            <input type="email" className="makeOrder__form-input" onChange={(e) => setEmailValue(e.target.value)} required />
                            <label className={emailValue.length > 0 ? "makeOrder__form-placeholder makeOrder__form-placeholder_emailEnable" : "makeOrder__form-placeholder"} >Ваш email</label>
                        </div>

                        <div className="makeOrder__form-group">
                            <textarea className="makeOrder__form-input" required />
                            <label className="makeOrder__form-placeholder">Комментарий к заказу</label>
                        </div>

                        <label className="input-file makeOrder__title-label">Загрузите файл
                            <br />
                            <input type="file" name="file" />
                            <span className="input-file-btn">загрузить файл</span>
                        </label>

                        <div className="makeOrder__radio-group">
                            <div className="makeOrder__title-label mb-3">Доставка заказа</div>
                            <input type="radio" className="makeOrder__radio" value="без" name="deliveryRadio" id="radio1" />
                            <label htmlFor="radio1" className="makeOrder__radio-label mb-2">Без доставки</label>
                            <br />
                            <input type="radio" className="makeOrder__radio" value="МКАД" name="deliveryRadio" id="radio2" />
                            <label htmlFor="radio2" className="makeOrder__radio-label mb-2">Доставка внутри МКАД (400р) = 400</label>
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