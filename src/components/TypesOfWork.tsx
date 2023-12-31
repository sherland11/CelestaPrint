import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

export default function TypeOfWork() {
    return (
        <Container className='typeOfWork'>
            <Row className='typeOfWork__title'>
                <Col sm='12' className='caption'>ВИДЫ ВЫПОЛНЯЕМЫХ РАБОТ</Col>
                <Col sm='12' className='desc'>Palette_print — типография полного цикла. Мы можем подготовить макет к печати, отпечатать изделия и собрать их в готовую книжку.</Col>
            </Row>
            <Row className="typeOfWork__content">
                <Col sm='12'>
                    <Accordion flush alwaysOpen>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Допечатная подготовка</Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-1'>1. Разработка дизайна или общей концепции конечного полиграфического изделия.</p>
                                <p className='mb-1'>2. Изготовление электронного макета изделия с использованием G</p>
                                <p className='mb-1'>3. Корректорская вычитка/правка текстового содержания макета.</p>
                                <p className='mb-1'>4. Внесение необходимых коррекций в макет с учетом особенностей печатного и послепечатного оборудования (цветокоррекция, расстановка треппинга и т. д.).</p>
                                <p className='mb-1'>5. Изготовление цветопробы (цветного образца конечного изделия)</p>
                                <p className='mb-1'>6. Изготовление электронного спуска полос с учетом последующей послепечатной обработки изделия (биговка, фальцовка, резка и т. д.).</p>
                                <p className='mb-1'>7. Изготовление цветоделенных диапозитивов (вывод пленок) или отправка электронных спусков полос на устройство CTP для изготовления печатных форм.</p>
                                <p>8. Изготовление печатных форм для печатного оборудования для последующей печати изделия.</p>
                                </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Цифровая печать</Accordion.Header>
                            <Accordion.Body>
                                Изготовление тиражной печатной продукции с помощью «цифрового» оборудования — устройств, печатающих непосредственно из электронных файлов и использующих 
                                не офсетную технологию, а технологию прямого нанесения красок (как в принтерах и ризографах). Правильнее было бы назвать этот способ печати «печать без 
                                применения постоянных печатных форм». Однако в ризографах, например, используется постоянная форма, но из-за быстрого изготовления печатных форм непосредственно 
                                в них перед печатью их обычно относят к цифровым печатным машинам
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='2'>
                            <Accordion.Header>Офсетная печать</Accordion.Header>
                            <Accordion.Body>
                                Технология печати, предусматривающая перенос краски с печатной формы на запечатываемый материал не напрямую, а через промежуточный офсетный цилиндр. Соответственно, 
                                в отличие от прочих методов печати, изображение на печатной форме делается не зеркальным, а прямым. Офсет применяется главным образом в плоской печати.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='3'>
                            <Accordion.Header>Послепечатная обработка</Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-1'>- Брошюровочно-переплетные (изготовление печатной продукции как готового изделия: Фальцовка, Обрезка, Переплёт)</p>
                                <p>- Отделочные (доработка готового изделия в соответствии с требованиями заказчика)</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='4'>
                            <Accordion.Header>Брошюровка</Accordion.Header>
                            <Accordion.Body>
                                Скрепление отпечатанных листов в книгу или брошюру соответственно нумерации
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='5'>
                            <Accordion.Header>Обложки</Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-1'>- Брошюры на скобу</p>
                                <p className='mb-1'>- Мягкий переплет КБС</p>
                                <p>- Мягкий переплет КШС</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='6'>
                            <Accordion.Header>Переплеты</Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-1'>- Твердый переплет №7БЦ</p>
                                <p className='mb-1'>- Твердый переплет №7Б</p>
                                <p className='mb-1'>- Твердый переплет №7</p>
                                <p className='mb-1'>- Твердый переплет №5</p>
                                <p className='mb-1'>- Интегральный переплет</p>
                                <p className='mb-1'>- Диссертационный переплет</p>
                                <p className='mb-1'>- Переплет на пружину</p>
                                <p>- Переплет на болты</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='7'>
                            <Accordion.Header>Тиснение</Accordion.Header>
                            <Accordion.Body>
                                <p className='mb-4'>
                                    Полиграфический процесс, относящийся к послепечатной отделке продукции, основанный на припрессовке горячим или холодным способом металлизированной или пигментной 
                                    фольги или другого материала.
                                </p>
                                <p className='mb-1'>Мы выполняем:</p>
                                <p className='mb1'>
                                    - Тиснение фольгой
                                </p>
                                <p className='mb-1'>
                                    - Слепое тиснение.
                                </p>
                                <p className='mb-1'>
                                    - Конгревное тиснение без фольги.
                                </p>
                                <p className='mb-1'>
                                    - Конгревное тиснение с фольгой.
                                </p>
                                <p className='mb-1'>
                                    -Тиснение фольгой.
                                </p>
                                <p className='mb-1'>
                                    - Слепое тиснение.
                                </p>
                                <p className='mb-1'>
                                    - Конгревное тиснение без фольги.
                                </p>
                                <p className='mb-1'>
                                    - Конгревное тиснение с фольгой.
                                </p>
                                <p>- Обратный конгрев.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
            <Row className='typeOfWork__order'>
                <Col sm='12' className='typeOfWork__button'>
                    <a href='#makeOrder'>Сделать заказ</a>
                </Col>
            </Row>
        </Container>
    )
}