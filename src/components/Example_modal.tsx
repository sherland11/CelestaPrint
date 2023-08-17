import React from 'react'
import { Modal, ModalBody } from 'react-bootstrap'

interface Props {
    image: string
    ownModal: (newValue: boolean) => void
    prevModal: (newValue: boolean) => void
    nextModal: (newValue: boolean) => void
}

export default function ExampleModal({ image, ownModal, prevModal, nextModal }: Props) {
    const [zoomImage, setZoomImage] = React.useState<boolean>(false)
    return (
        <>
            <Modal.Header closeButton></Modal.Header>
            <ModalBody>
                <img src={image} alt='Пример продукции' className={zoomImage ? 'example__modal-body-image image-scale' : 'example__modal-body-image'} onClick={() => setZoomImage(!zoomImage)}/>
                <img src='images/zoom.svg' alt='Приблизить изображение' className='example__modal-body-zoom' onClick={() => setZoomImage(!zoomImage)}></img>
                <div className="example__chevron-left-container" onClick={() => { ownModal(false); prevModal(true) }}>
                    <img src='images/chevron-left.svg' alt='Левая стрелка' className='example__chevron-left'></img>
                </div>
                <div className="example__chevron-right-container" onClick={() => { ownModal(false); nextModal(true) }}>
                    <img src='images/chevron-right.svg' alt='Правая стрелка' className='example__chevron-right'></img>
                </div>
            </ModalBody>
        </>
    )
}