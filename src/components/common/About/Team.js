import React from 'react'
import PropTypes from 'prop-types'
import TeamProfiles from "./TeamProfiles"

const Team = ({ teamProfiles }) => {
    const advisors = teamProfiles.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreAdvisoryCouncil`))
    const team = teamProfiles.filter(post => post.node.tags.some(tag => tag.name === `#WhoWeAreStaff`))

    return <div className="container Team__topBlock">
        <h2 className="Team__blockSubtitle" >Advisors</h2>
        <TeamProfiles profiles={advisors} />
        <h2 className="Team__blockSubtitle" >Team</h2>
        <TeamProfiles profiles={team} />
    </div>
}

Team.propTypes = {
    teamProfiles: PropTypes.any,
}

export default Team
