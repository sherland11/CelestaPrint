import React from "react";
import { useState } from "react";

export function useShowModal() {
    const [showModal1, setShowModal1] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showModal3, setShowModal3] = useState(false)
    const [showModal4, setShowModal4] = useState(false)
    const [showModal5, setShowModal5] = useState(false)
    const [showModal6, setShowModal6] = useState(false)

    return { showModal1, 
            showModal2, 
            showModal3, 
            showModal4, 
            showModal5, 
            showModal6, 
            setShowModal1,
            setShowModal2, 
            setShowModal3, 
            setShowModal4, 
            setShowModal5, 
            setShowModal6
        }
}