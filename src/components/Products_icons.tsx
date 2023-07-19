import React from "react";

interface Props {
    title: string
    image: string
}

export default function Products_icons( {title, image}: Props ) {
    return (
        <div className="products-icons">
            <img src={image} alt={title} className="products-icons__image" />
            <div className="products-icons__title">{title}</div>
        </div>
    )
}