import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Check } from "react-bootstrap-icons"

export default function Conditions() {
    return (
        <Container className="conditions" id="conditions">
            <Row className="conditions__title">
                <Col sm='12' className="caption">Условия работы</Col>
            </Row>
            <Row className="conditions__requirements">
                <Col sm='12' className="conditions__requirements_title mb-3">Технические требования к макету</Col>
                <Col sm='12' className="consitions__requirements_desc">
                    <p className="mb-1">Перед тем, как направить нам макет, проверьте, верно ли вы подготовили его для печати.</p> 
                    <p>Правильная допечатная подготовка экономит много времени.</p>  
                </Col>
            </Row>
            <Row className="conditions__check">
                <Col lg='5' sm='12' className="p-0">
                    <ul>
                        <li><Check size='65' className="conditions_icon"  ></Check>Форматы - pdf, tiff, Ai, SVG</li>
                        <li><Check size='65' className="conditions_icon"></Check>Разрешение (для растра) - 300 dpi</li>
                        <li><Check size='65' className="conditions_icon"></Check>Цветность - CMYK (100% black)</li>
                    </ul>
                </Col>
                <Col lg='7' sm='12' className="p-0">
                    <ul>
                        <li><Check size='65' className="conditions_icon"></Check>Вылеты - 5мм</li>
                        <li><Check size='65' className="conditions_icon"></Check>Макет блока - постраничный вид</li>
                        <li><Check size='65' className="conditions_icon"></Check>Макет обложки / переплета - разворотный вид</li>
                    </ul>
                </Col>
            </Row>
            <Row className="conditions__delivery">
                <Col className="conditions__delivery_title" sm='12'>УСЛОВИЯ ДОСТАВКИ ТИРАЖЕЙ И ИЗДЕЛИЙ</Col>
                <Col className="conditions__delivery_desc" sm='12'>
                    Мы выполняем доставку по Москве и в другие города. Доставка внутри Садового кольца — 400р. 
                    В пределах МКАД — 600р. Доставка в другие города — от 1500р.
                </Col>
            </Row>
        </Container>
    )
}