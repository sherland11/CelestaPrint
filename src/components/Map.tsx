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
        <Container className="map">
            <Row className="map__content">
                <Col sm="12" className="map__yandex-map"></Col>
            </Row>
        </Container>
    )
}