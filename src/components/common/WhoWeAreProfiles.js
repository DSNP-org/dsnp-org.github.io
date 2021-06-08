import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ArrowDark from "../../images/arrow-btn-dark.svg"
import ArrowLight from "../../images/arrow-button-light.svg"

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
            {profiles.map(profile => <div
                key={profile.node.id}
                className="WhoWeAreProfiles__imageBlock"
                onClick={() => toggleDisplayProfiles(profile.node)}>
                <img className="WhoWeAreProfiles__image" src={profile.node.feature_image} />
                <div className="WhoWeAreProfiles__imageOverlayBlock">
                    <div className="WhoWeAreProfiles__name">{profile.node.title}</div>
                    <img className={`WhoWeAreProfiles__arrow ${selectedProfile === profile.node ? `active` : null}`}
                        src={selectedProfile === profile.node ? ArrowLight : ArrowDark}
                        alt="upArrow"
                    />
                </div>
            </div>
            )}
        </div>
        {selectedProfile &&
            <div className="WhoWeAreProfiles__descriptionBlock">
                <div className="WhoWeAreProfiles__closeIcon" onClick={() => toggleDisplayProfiles(selectedProfile.node)}>&#10005;</div>
                <section
                    className="WhoWeAreProfiles__description"
                    dangerouslySetInnerHTML={{ __html: selectedProfile.html }}
                />
            </div>
        }
    </>
}

WhoWeAreProfiles.propTypes = {
    profiles: PropTypes.any,
}

export default WhoWeAreProfiles
