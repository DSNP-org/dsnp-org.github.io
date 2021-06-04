import React from 'react'
import PropTypes from 'prop-types'
import WhoWeAreProfiles from "./WhoWeAreProfiles"

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 309dd38 (toggle working on who we are and other additions)
const WhoWeArePostCard = ({ whoWeAreCards }) => {
    const whoWeAreTitle = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreTitle`))
    const whoWeAreStaffMembers = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreStaffMember`))
    const whoWeAreAdvisoryBoard = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreAdvisoryBoard`))
    const whoWeArePartners = whoWeAreCards.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeArePartner`))

    return <div className="container">
        <h2 className="PageAbout__sectionHeader PageAbout__sectionHeader--orange" data-aos="fade-right"
            data-aos-duration="1400">{whoWeAreTitle[0].node.title}</h2>
        <div className="WhoWeAreProfiles__topBlock">
            <h3 className="WhoWeAreProfiles__blockSubtitle">Staff</h3>
            <WhoWeAreProfiles profiles={whoWeAreStaffMembers} />
<<<<<<< HEAD
            <h3 className="WhoWeAreProfiles__blockSubtitle" >Advisory Board</h3>
            <WhoWeAreProfiles profiles={whoWeAreAdvisoryBoard} />
            <h3 className="WhoWeAreProfiles__blockSubtitle" >Partners</h3>
=======
            <h3 className="WhoWeAreProfiles__blockSubtitle">Advisory Board</h3>
            <WhoWeAreProfiles profiles={whoWeAreAdvisoryBoard} />
            <h3 className="WhoWeAreProfiles__blockSubtitle">Partners</h3>
>>>>>>> 309dd38 (toggle working on who we are and other additions)
            <WhoWeAreProfiles profiles={whoWeArePartners} />
        </div>
    </div>
}
<<<<<<< HEAD
=======
const WhoWeArePostCard = ({ whoWeAreCards }) => <>
    {whoWeAreCards.map(whoWeAreCard => <div className="container" key={whoWeAreCard.node.id}>
        <h2>{whoWeAreCard.node.title}</h2>
        <section key={whoWeAreCard.node.id} dangerouslySetInnerHTML={{ __html: whoWeAreCard.node.html }} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aspernatur, eaque eos facere illum nam nihil tempore veniam voluptatem. Cumque, deleniti, itaque! Delectus doloribus facilis libero nihil optio rem.</p>
    </div>)}
</>
>>>>>>> 4192fcb (wip)
=======
>>>>>>> 309dd38 (toggle working on who we are and other additions)

WhoWeArePostCard.propTypes = {
    whoWeAreCards: PropTypes.any,
}

export default WhoWeArePostCard
