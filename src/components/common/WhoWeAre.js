import React from 'react'
import PropTypes from 'prop-types'
import WhoWeAreProfiles from "./WhoWeAreProfiles"

const WhoWeArePostCard = ({ whoWeAreCards, whoWeAreHeadshots }) => {
    const whoWeAreTitle = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreTitle`))
    const whoWeAreAdvisoryCouncil = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreAdvisoryCouncil`))
    const whoWeAreStaff = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreStaff`))

    const getHeadshots = () => {
        for (let i in whoWeAreCards) {
            for (let j in whoWeAreHeadshots) {
                if (whoWeAreCards[i].node.featureImageSharp === whoWeAreHeadshots[j].node.id && typeof whoWeAreHeadshots[j]?.node !== `undefined`) {
                    whoWeAreCards[i].headshot = whoWeAreHeadshots[j].node.childImageSharp.fixed
                }
            }
        }
    }
    getHeadshots()

    return <div className="container">
        <h2 className="PageAbout__sectionHeader" data-aos="fade-right"
            data-aos-duration="1400">{whoWeAreTitle[0].node.title}</h2>
        <div className="WhoWeAreProfiles__topBlock">
            <h3 className="WhoWeAreProfiles__blockSubtitle" >Advisors</h3>
            <WhoWeAreProfiles profiles={whoWeAreAdvisoryCouncil} />
            <h3 className="WhoWeAreProfiles__blockSubtitle" >Team</h3>
            <WhoWeAreProfiles profiles={whoWeAreStaff} />
        </div>
    </div>
}

WhoWeArePostCard.propTypes = {
    whoWeAreCards: PropTypes.any,
    whoWeAreHeadshots: PropTypes.any,
}

export default WhoWeArePostCard
