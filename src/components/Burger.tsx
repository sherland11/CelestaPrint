import React from "react";

interface Props {
    setOpenBurger: (newValue: boolean) => void
}

export default function Burger({ setOpenBurger }: Props) {

    return (
        <div className="burger">
            <img className="burger__close-btn" src="images/close-btn.svg" alt="Close button" onClick={() => setOpenBurger(false)} />
            <nav className="burger__nav">
                <ul>
                    <li><a href="#makeOrder" onClick={() => setOpenBurger(false)}>Цены</a></li>
                    <li><a href="#example" onClick={() => setOpenBurger(false)}>Примеры</a></li>
                    <li><a href="#conditions" onClick={() => setOpenBurger(false)}>Требования к макетам</a></li>
                </ul>                
            </nav>
            <ul className='burger__contacts'>Контакты:
                    <li className="mt-3">+123 356 78 677</li>
                    <li>Лучников пер., 4 стр. 12</li>
                    <li>Пн-птн: 10:00 - 20:00</li>
            </ul>
            <a href='#makeOrder' className="burger__btn" onClick={() => setOpenBurger(false)}>Оформить заказ</a>
        </div>
    )
}