import React, { useState } from 'react'
import PropTypes from 'prop-types'

const WhoWeAreProfiles = ({ profiles }) => {
    const [selectedProfiles, setSelectedProfiles] = useState([])

    const toggleDisplayProfiles = (profile) => {
        if (selectedProfiles.includes(profile)) {
            const filterOpenQuestions = selectedProfiles.filter(item => item !== profile)
            setSelectedProfiles(filterOpenQuestions)
        } else {
            setSelectedProfiles([...selectedProfiles, profile])
        }
    }

    return <>
        <div className="WhoWeAreProfiles__block">
            {profiles.map((profile, index) => <div key={profile.node.id}>
                <div className="WhoWeAreProfiles__imageBlock" onClick={() => toggleDisplayProfiles(profile.node.id, index)}>
                    <img className="WhoWeAreProfiles__image" src={profile.node.feature_image} />
                    <div className="WhoWeAreProfiles__name">{profile.node.title}</div>
                </div>
            </div>)}
        </div>
        <section
            className={`WhoWeAreProfiles__description ${selectedProfiles.includes(profiles[0].node.id) ? `visible` : null}`}
            dangerouslySetInnerHTML={{ __html: profiles[0].node.html }}/>
    </>
}

WhoWeAreProfiles.propTypes = {
    profiles: PropTypes.any,
}

export default WhoWeAreProfiles
