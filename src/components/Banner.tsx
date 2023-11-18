import { Container, Row, Col  } from 'react-bootstrap'

export default function Banner() {

    return (
        <Container className='banner container'>

            <Row className='banner__content'>
                <Col xl='7' sm='12' className='banner__title mb-5'>ТИПОГРАФИЯ ПОЛНОГО ЦИКЛА</Col>
                <Col xl='10' sm='12' className='banner__subTitle'>
                    Мы специализируемся на печати книг, брошюр и альбомов. Мы следим за качеством технического оснащения типографии, выполняем все стадии печатных работ.
                </Col>
            </Row>
        
        </Container>
    )
}