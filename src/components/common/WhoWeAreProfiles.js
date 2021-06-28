import React, { useState } from 'react'
import Img from "gatsby-image"
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
                onClick={() => toggleDisplayProfiles(profile)}>
                <Img className="WhoWeAreProfiles__image"
                    fixed={profile.headshot}
                    alt={`${profile} image`} />
                <div className="WhoWeAreProfiles__imageOverlayBlock">
                    <div className="WhoWeAreProfiles__name">{profile.node.title}</div>
                    <img className={`WhoWeAreProfiles__arrow ${selectedProfile === profile ? `active` : null}`}
                        src={selectedProfile === profile ? ArrowLight : ArrowDark}
                        alt="upArrow"
                    />
                </div>
            </div>
            )}
        </div>
        {selectedProfile &&
            <div className="WhoWeAreProfiles__descriptionBlock">
                <div className="WhoWeAreProfiles__descriptionBlock--inner container">
                    <div className="WhoWeAreProfiles__closeIcon" onClick={() => toggleDisplayProfiles(selectedProfile)}>&#10005;</div>
                    <div className="WhoWeAreProfiles__selectedProfileBlock">
                        <Img className="WhoWeAreProfiles__image"
                            fixed={selectedProfile.headshot}
                            objectFit="cover"
                            alt={`${selectedProfile.node.title} image`} />
                        <div className="WhoWeAreProfiles__descriptionTextBlock">
                            <div className="WhoWeAreProfiles__selectedProfileName">{selectedProfile.node.title}</div>
                            <section
                                className="WhoWeAreProfiles__description"
                                dangerouslySetInnerHTML={{ __html: selectedProfile.node.html }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
}

WhoWeAreProfiles.propTypes = {
    profiles: PropTypes.any,
}

export default WhoWeAreProfiles
