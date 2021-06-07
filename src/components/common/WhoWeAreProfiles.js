import React, { useState } from 'react'
import PropTypes from 'prop-types'
import UpArrow from "../../images/up-arrow-btn.svg"

const WhoWeAreProfiles = ({ profiles }) => {
    const [selectedProfile, setSelectedProfile] = useState(null)

    const toggleDisplayProfiles = (profile) => {
        if (selectedProfile === profile) {
            setSelectedProfile(null)
        } else {
            setSelectedProfile(profile)
        }
    }

    return <>
        <div className="WhoWeAreProfiles__block">
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
    </>
}

WhoWeAreProfiles.propTypes = {
    profiles: PropTypes.any,
}

export default WhoWeAreProfiles
