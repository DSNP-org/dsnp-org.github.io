import React from 'react'
import PropTypes from 'prop-types'

const EcosystemPostCard = ({ ecosystemPosts }) => <div className="container">

    <h2 className="PageAbout__sectionHeader" data-aos="fade-right"
        data-aos-duration="1400">{ecosystemPosts[0].node.title}</h2>
</div>

EcosystemPostCard.propTypes = {
    ecosystemPosts: PropTypes.any,
}

export default EcosystemPostCard
