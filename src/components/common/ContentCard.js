import React from 'react'
import PropTypes from 'prop-types'

const PostCard = ({ cardData }) => {
    console.log(cardData)
    return <>
        <h3>{cardData.title}</h3>
        <p>{cardData.plaintext}</p>
    </>
}

PostCard.propTypes = {
    cardData: PropTypes.any,
}

export default PostCard
