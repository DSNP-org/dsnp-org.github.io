import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import ArrowDark from "../../images/arrow-btn-dark.svg"

const IndexPostCard = ({ cardData, index }) => {
    const cardNumber = index < 10 ? `0${index}` : index
    const postCard = <>
        <div className="ContentCard__cardNumber">{cardNumber}</div>
        <h3 className="ContentCard__title">{cardData.title}</h3>
        <div
            className="ContentCard__text"
            dangerouslySetInnerHTML={{ __html: cardData.html }}
        />
        <img className="ContentCard__button" src={ArrowDark} alt="arrow-button"/>
    </>

    const getLinkButton = () => {
        if (cardData.excerpt.includes(`http`)) {
            return <a href={cardData.excerpt} className="ContentCard__link hoverLink" target="_blank" rel="noreferrer">
                {postCard}
            </a>
        } else {
            return <Link to={cardData.excerpt} className="ContentCard__link hoverLink">
                {postCard}
            </Link>
        }
    }
    return <div className="ContentCard__item" >{getLinkButton()}</div>
}

IndexPostCard.propTypes = {
    cardData: PropTypes.any,
    index: PropTypes.number,
}

export default IndexPostCard
