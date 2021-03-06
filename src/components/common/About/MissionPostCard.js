import React from 'react'
import PropTypes from 'prop-types'

const MissionPostCard = ({ missionCards }) => (
    <>
        {missionCards.map(missionCard => <div className="container" key={missionCard.node.id}>
            <h2 className="TemplatePostCard__title TemplatePostCard__title--orange" data-aos="fade-right" data-aos-duration="1400">{missionCard.node.title}</h2>
            <section key={missionCard.node.id} dangerouslySetInnerHTML={{ __html: missionCard.node.html }} />
        </div>)}
    </>
)

MissionPostCard.propTypes = {
    missionCards: PropTypes.any,
}

export default MissionPostCard
