import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import UpArrow from "../../images/up-arrow-btn.svg"

const IndexPostCard = ({ cardData, index }) => {
    const cardNumber = index < 10 ? `0${index}` : index
    const getLinkButton = () => {
        if (cardData.excerpt.includes(`http`)) {
            return <a href={cardData.excerpt} className="hoverLink" target="_blank" rel="noreferrer">
                <img className="ContentCard__button" src={UpArrow} alt="up-arrow-button"/>
            </a>
        } else {
            return <Link to={cardData.excerpt} className="hoverLink">
                <img className="ContentCard__button" src={UpArrow} alt="up-arrow-button"/>
            </Link>
        }
    }
    return (
        <div className="ContentCard__item" >
            <div className="ContentCard__cardNumber">{cardNumber}</div>
            <h3 className="ContentCard__title">{cardData.title}</h3>
            <div
                className="ContentCard__text"
                dangerouslySetInnerHTML={{ __html: cardData.html }}
            />
            {getLinkButton()}
        </div>
    )
}

IndexPostCard.propTypes = {
    cardData: PropTypes.any,
    index: PropTypes.number,
}

export default IndexPostCard
