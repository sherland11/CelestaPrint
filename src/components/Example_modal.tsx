import React from 'react'
import { Modal, ModalBody } from 'react-bootstrap'

interface Props {
    image: string
    ownModal: (newValue: boolean) => void
    prevModal: (newValue: boolean) => void
    nextModal: (newValue: boolean) => void
}

export default function Example_modal({ image, ownModal, prevModal, nextModal }: Props) {
    const [zoomImage, setZoomImage] = React.useState<boolean>(false)
    return (
        <>
            <Modal.Header closeButton></Modal.Header>
            <ModalBody>
                <img src={image} className={zoomImage ? 'example__modal_body_image image-scale' : 'example__modal_body_image'} onClick={() => setZoomImage(!zoomImage)}/>
                <img src='images/zoom.svg' className='example__modal_body_zoom' onClick={() => setZoomImage(!zoomImage)}></img>
                <div className="example__chevron-left-container" onClick={() => { ownModal(false); prevModal(true) }}>
                    <img src='images/chevron-left.svg' className='example__chevron-left'></img>
                </div>
                <div className="example__chevron-right-container" onClick={() => { ownModal(false); nextModal(true) }}>
                    <img src='images/chevron-right.svg' className='example__chevron-right'></img>
                </div>
            </ModalBody>
        </>
    )
}