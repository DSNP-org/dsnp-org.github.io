import React from 'react'
import PropTypes from 'prop-types'
import WhoWeAreProfiles from "./WhoWeAreProfiles"

const WhoWeArePostCard = ({ whoWeAreCards }) => {
    const whoWeAreTitle = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreTitle`))
    const whoWeAreAdvisoryCouncil = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreAdvisoryCouncil`))
    const whoWeAreStaff = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreStaff`))

    return <div className="container">
        <h2 className="TemplatePostCard__title" data-aos="fade-right"
            data-aos-duration="1400">{whoWeAreTitle[0].node.title}</h2>
        <div className="WhoWeArePostCard__topBlock">
            <h3 className="WhoWeArePostCard__blockSubtitle" >Advisors</h3>
            <WhoWeAreProfiles profiles={whoWeAreAdvisoryCouncil} />
            <h3 className="WhoWeArePostCard__blockSubtitle" >Team</h3>
            <WhoWeAreProfiles profiles={whoWeAreStaff} />
        </div>
    </div>
}

WhoWeArePostCard.propTypes = {
    whoWeAreCards: PropTypes.any,
}

export default WhoWeArePostCard
