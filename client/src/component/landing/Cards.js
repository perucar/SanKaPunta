import React from 'react'
import CardItem from './CardItem';
import './../../css/Cards.css'
import Image from './../../images/img-El Nido.jpg'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these epic destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={Image} text="This is a sample text" label="Location"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;