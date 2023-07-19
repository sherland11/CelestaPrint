import React from 'react'
import { Modal, ModalBody } from 'react-bootstrap'

interface Props {
    image: string
}

export default function Example_modal({ image }: Props) {
    
    return (
        <>
            <Modal.Header closeButton></Modal.Header>
            <ModalBody>
                <img src={image} className='example__modal_body_image'/>
                <img src='images/zoom.svg' className='example__modal_body_zoom'></img>
                <img src='images/chevron-left.svg' className='example__modal_body_chevron-left'></img>
                <img src='images/chevron-right.svg' className='example__modal_body_chevron-right'></img>
            </ModalBody>
        </>
    )
}