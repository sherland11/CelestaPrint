import React from "react";

interface Props {
    setOpenBurger: (newValue: boolean) => void
}

export default function Burger({ setOpenBurger }: Props) {

    return (
        <div className="burger">
            <div className="burger__title">CelestaPrint</div>
            <img className="burger__close-btn" src="images/close-btn.svg" alt="Close button" onClick={() => setOpenBurger(false)} />
            <nav className="burger__nav">
                <ul>
                    <li><a href="#makeOrder" onClick={() => setOpenBurger(false)}>Цены</a></li>
                    <li><a href="#example" onClick={() => setOpenBurger(false)}>Примеры</a></li>
                    <li><a href="#conditions" onClick={() => setOpenBurger(false)}>Требования</a></li>
                    <li><a href="#contacts" onClick={() => setOpenBurger(false)}>Контакты</a></li>
                </ul>                
            </nav>
            <a href='#makeOrder' className="burger__btn" onClick={() => setOpenBurger(false)}>Оформить заказ</a>
        </div>
    )
}