import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Map() {
    ymaps.ready(init)
    function init() {
      let myMap = new ymaps.Map("map__yandex-map", {
        center: [55.746811, 37.584838],
        zoom: 15,
        controls: ['smallMapDefaultSet']
      })
      let myPlacemark = new ymaps.Placemark([55.746811, 37.584838])
      myMap.geoObjects.add(myPlacemark)
    }

    return (
        <Container className="map" id="contacts">
          <Row className="map__card">
              <Col sm="12" className="map__card-text">
                <div>
                  <p className="map__card-title">palette_print. Как пройти</p>
                  <p className="map__card-info mb-1">Адрес: Москва, Лучников пер., 4 стр. 12</p>
                  <p className="map__card-info mb-3">Телефон: +123 356 78 677</p>
                  <p className="map__card-route">
                    Мы находимся во дворе между Лучниковым и Большим Златоустинским переулками. 
                    Проход в арку со стороны Златоустинского, сразу за магазином ковров Алибаба.
                  </p>
                </div>
                <div className="map__card-media">
                  <a href="https://x.com" rel="noreferrer" target="_blank"><img src="images/social-network/twitter.svg" alt="twitter" /></a>
                  <a href="https://t.me" rel="noreferrer" target="_blank"><img src="images/social-network/telegram.svg" alt="telegram" /></a>
                  <a href="https://vk.com/" rel="noreferrer" target="_blank"><img src="images/social-network/vk.svg" alt="vk" /></a>
                </div>
              </Col>
            </Row>
            <Row className="map__content">
                <Col sm="12" className="map__yandex-map" id="map__yandex-map"></Col>
            </Row>
        </Container>
    )
}