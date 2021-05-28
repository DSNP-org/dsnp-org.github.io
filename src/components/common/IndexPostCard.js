import React from 'react'
import PropTypes from 'prop-types'
import UpArrow from "../../images/up-arrow-btn.svg"

const IndexPostCard = ({ cardData, index }) => {
    const cardNumber = index < 10 ? `0${index}` : index
    return <div className="ContentCard__item" >
        <div className="ContentCard__cardNumber">{cardNumber}</div>
        <h3 className="ContentCard__title">{cardData.title}</h3>
        <p className="ContentCard__text">{cardData.plaintext}</p>
        <div className="hoverLink">
            <img className="ContentCard__button" src={UpArrow} alt="up-arrow-button"/>
        </div>
    </div>
}

IndexPostCard.propTypes = {
    cardData: PropTypes.any,
    index: PropTypes.number,
}

export default IndexPostCard
