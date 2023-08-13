import React from "react";

interface Props {
    setOpenBurger: (newValue: boolean) => void
}

export default function Burger({ setOpenBurger }: Props) {
    return (
        <div className="burger">
            <img className="burger__close-btn" src="images/close-btn.svg" alt="Close button" onClick={() => setOpenBurger(false)} />
        </div>
    )
}