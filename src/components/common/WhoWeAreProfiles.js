import React, { useState } from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
import UpArrow from "../../images/up-arrow-btn.svg"

const WhoWeAreProfiles = ({ profiles }) => {
    const [selectedProfile, setSelectedProfile] = useState(null)

    const toggleDisplayProfiles = (profile) => {
        if (selectedProfile === profile) {
            setSelectedProfile(null)
        } else {
            setSelectedProfile(profile)
=======

const WhoWeAreProfiles = ({ profiles }) => {
    const [selectedProfiles, setSelectedProfiles] = useState([])

    const toggleDisplayProfiles = (profile) => {
        if (selectedProfiles.includes(profile)) {
            const filterOpenQuestions = selectedProfiles.filter(item => item !== profile)
            setSelectedProfiles(filterOpenQuestions)
        } else {
            setSelectedProfiles([...selectedProfiles, profile])
>>>>>>> 309dd38 (toggle working on who we are and other additions)
        }
    }

    return <>
        <div className="WhoWeAreProfiles__block">
<<<<<<< HEAD
            {profiles.map((profile, index) => <div
                key={profile.node.id}
                className="WhoWeAreProfiles__imageBlock"
                onClick={() => toggleDisplayProfiles(profile.node, index)}>
                <img className="WhoWeAreProfiles__image" src={profile.node.feature_image} />
                <div className="WhoWeAreProfiles__imageOverlayBlock">
                    <div className="WhoWeAreProfiles__name">{profile.node.title}</div>
                    <img className="WhoWeAreProfiles__arrow" src={UpArrow} alt="upArrow" />
                </div>
            </div>
            )}
        </div>
        {selectedProfile && <section
            className="WhoWeAreProfiles__description"
            dangerouslySetInnerHTML={{ __html: selectedProfile.html }}
        />
        }
=======
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
>>>>>>> 309dd38 (toggle working on who we are and other additions)
    </>
}

WhoWeAreProfiles.propTypes = {
    profiles: PropTypes.any,
}

export default WhoWeAreProfiles
