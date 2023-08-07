import React from 'react'
import Example_modal from './Example_modal'
import { Col, Container, Row, Modal, ModalBody } from 'react-bootstrap'

export default function Example() {
    const [showModal1, setShowModal1] = React.useState(false)
    const [showModal2, setShowModal2] = React.useState(false)
    const [showModal3, setShowModal3] = React.useState(false)
    const [showModal4, setShowModal4] = React.useState(false)
    const [showModal5, setShowModal5] = React.useState(false)
    const [showModal6, setShowModal6] = React.useState(false)

    return (
        <Container className='example' id='example'>
            <Row className='example__title'>
                <Col sm='12' className='caption'>НАШИ РАБОТЫ</Col>
                <Col sm='12' className='desc'>Следите за нашей лентой <a href="vk.com">ВКонтакте</a>. Мы публикуем свежие работы и новости</Col>
            </Row>
            <Row className="example__content">

                <Col xs='8'>
                    <div className='example__modalBtn example__modalBtn_65_percent'>
                        <img src="images/example/1.jpg" alt="" onClick={() => setShowModal1(true)} className='example__modalBtn_image'/>    
                    </div>
                    <Modal show={showModal1} fullscreen={true} onHide={() => setShowModal1(false)}>
                        <Example_modal image='images/example/1.jpg' ownModal={setShowModal1} prevModal={setShowModal6} nextModal={setShowModal2}></Example_modal>
                    </Modal>
                </Col>

                <Col xs='4'>
                    <div className='example__modalBtn example__modalBtn_133_percent'>
                        <img src="images/example/2.jpg" alt="" onClick={() => setShowModal2(true)} className='example__modalBtn_image'/>    
                    </div>
                    <Modal show={showModal2} fullscreen={true} onHide={() => setShowModal2(false)}>
                        <Example_modal image='images/example/2.jpg' ownModal={setShowModal2} prevModal={setShowModal1} nextModal={setShowModal3}></Example_modal>
                    </Modal>
                </Col>

                <Col xs='4'>
                    <div className='example__modalBtn example__modalBtn_133_percent'>
                        <img src="images/example/3.jpg" alt="" onClick={() => setShowModal3(true)} className='example__modalBtn_image'/>    
                    </div>
                    <Modal show={showModal3} fullscreen={true} onHide={() => setShowModal3(false)}>
                        <Example_modal image='images/example/3.jpg' ownModal={setShowModal3} prevModal={setShowModal2} nextModal={setShowModal4}></Example_modal>
                    </Modal>
                </Col>

                <Col xs='8'>
                    <div className='example__modalBtn example__modalBtn_65_percent'>
                        <img src="images/example/4.jpg" alt="" onClick={() => setShowModal4(true)} className='example__modalBtn_image'/>    
                    </div>
                    <Modal show={showModal4} fullscreen={true} onHide={() => setShowModal4(false)}>
                        <Example_modal image='images/example/4.jpg' ownModal={setShowModal4} prevModal={setShowModal3} nextModal={setShowModal5}></Example_modal>
                    </Modal>
                </Col>

                <Col xs='8'>
                    <div className='example__modalBtn example__modalBtn_65_percent'>
                        <img src="images/example/5.jpg" alt="" onClick={() => setShowModal5(true)} className='example__modalBtn_image'/>    
                    </div>
                    <Modal show={showModal5} fullscreen={true} onHide={() => setShowModal5(false)}>
                        <Example_modal image='images/example/5.jpg' ownModal={setShowModal5} prevModal={setShowModal4} nextModal={setShowModal6}></Example_modal>
                    </Modal>
                </Col>

                <Col xs='4'>
                    <div className='example__modalBtn example__modalBtn_133_percent'>
                        <img src="images/example/6.jpg" alt="" onClick={() => setShowModal6(true)} className='example__modalBtn_image'/>    
                    </div>
                    <Modal show={showModal6} fullscreen={true} onHide={() => setShowModal6(false)}>
                        <Example_modal image='images/example/6.jpg' ownModal={setShowModal6} prevModal={setShowModal5} nextModal={setShowModal1}></Example_modal>
                    </Modal>
                </Col>

            </Row>

            <Row className="example__machine d-flex justify-content-center">
                <Col sm='8' className='example__machine-text'>
                    Мы работаем с 2005 года. С тех пор мы научились работать и с небольшими, и с крупными заказами. Мы всегда следим за качеством оборудования: в нашей типографии есть 
                    <a href="https://www.wikipedia.org/"> офсетная машина Heidelberg SM 74-5, </a> 
                    <a href="https://www.wikipedia.org/">офсетная машина Heidelberg PM 74-4, </a> 
                    <a href="https://www.wikipedia.org/">Лазерный станок Mustang MG1910</a>.
                </Col>
            </Row>
        </Container>
    )
}