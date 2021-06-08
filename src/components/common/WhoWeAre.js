import React from 'react'
import PropTypes from 'prop-types'
import WhoWeAreProfiles from "./WhoWeAreProfiles"

const WhoWeArePostCard = ({ whoWeAreCards }) => {
    const whoWeAreTitle = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreTitle`))
    const whoWeAreStaffMembers = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreStaffMember`))
    const whoWeAreAdvisoryBoard = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreAdvisoryBoard`))
    const whoWeArePartners = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeArePartner`))

    return <div className="container">
        <h2 className="PageAbout__sectionHeader" data-aos="fade-right"
            data-aos-duration="1400">{whoWeAreTitle[0].node.title}</h2>
        <div className="WhoWeAreProfiles__topBlock">
            <h3 className="WhoWeAreProfiles__blockSubtitle">Staff</h3>
            <WhoWeAreProfiles profiles={whoWeAreStaffMembers} />
            <h3 className="WhoWeAreProfiles__blockSubtitle" >Advisory Board</h3>
            <WhoWeAreProfiles profiles={whoWeAreAdvisoryBoard} />
            <h3 className="WhoWeAreProfiles__blockSubtitle" >Partners</h3>
            <WhoWeAreProfiles profiles={whoWeArePartners} />
        </div>
    </div>
}

WhoWeArePostCard.propTypes = {
    whoWeAreCards: PropTypes.any,
}

export default WhoWeArePostCard
