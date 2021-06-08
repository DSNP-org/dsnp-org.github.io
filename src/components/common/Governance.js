import React from 'react'
import PropTypes from 'prop-types'

const GovernancePostCard = ({ governanceCards }) => <>
    {governanceCards.map(governanceCard => <div className="container" key={governanceCard.node.id}>
        <h2 className="PageAbout__sectionHeader PageAbout__sectionHeader--orange" data-aos="fade-right" data-aos-duration="1400">{governanceCard.node.title}</h2>
        <section key={governanceCard.node.id} dangerouslySetInnerHTML={{ __html: governanceCard.node.html }}/>
    </div>)}
</>

GovernancePostCard.propTypes = {
    governanceCards: PropTypes.any,
}

export default GovernancePostCard
