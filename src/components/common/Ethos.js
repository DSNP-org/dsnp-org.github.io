import React from 'react'
import PropTypes from 'prop-types'

const EthosPostCard = ({ ethosCards }) => <>
    {ethosCards.map(ethosCard => <div className="container" key={ethosCard.node.id}>
        <h2 className="PageAbout__sectionHeader" data-aos="fade-right" data-aos-duration="1400">{ethosCard.node.title}</h2>
        <section key={ethosCard.node.id} dangerouslySetInnerHTML={{ __html: ethosCard.node.html }}/>
    </div>)}
</>

EthosPostCard.propTypes = {
    ethosCards: PropTypes.any,
}

export default EthosPostCard
