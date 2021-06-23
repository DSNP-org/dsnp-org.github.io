import React, { useState } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import ArrowDark from "../../images/arrow-btn-dark.svg"

const IndexPostCard = ({ cardData, index }) => {
    const [isHovering, setIsHovering] = useState(false)
    const cardNumber = index < 10 ? `0${index}` : index
    const postCard = <>
        <div className="IndexPostCard__cardNumber">{cardNumber}</div>
        <h3 className="IndexPostCard__title">{cardData.title}</h3>
        <div
            className="IndexPostCard__text"
            dangerouslySetInnerHTML={{ __html: cardData.html }}
        />
        <img className="IndexPostCard__button" src={ArrowDark} alt="arrow-button"/>
    </>

    const getLinkButton = () => {
        if (cardData.excerpt.includes(`http`)) {
            return <a href={cardData.excerpt} className="IndexPostCard__link hoverLink" target="_blank" rel="noreferrer">
                {postCard}
            </a>
        } else {
            return <Link to={cardData.excerpt} className="IndexPostCard__link hoverLink">
                {postCard}
            </Link>
        }
    }
    return <div className={`IndexPostCard__item ${isHovering ? `IndexPostCard__item--active` : null}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >{getLinkButton()}</div>
}

IndexPostCard.propTypes = {
    cardData: PropTypes.any,
    index: PropTypes.number,
}

export default IndexPostCard
