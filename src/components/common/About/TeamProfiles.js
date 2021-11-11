import React, { useState } from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from 'prop-types'
import ArrowDark from "../../../images/arrow-btn-dark.svg"
import ArrowLight from "../../../images/arrow-button-light.svg"

const TeamProfiles = ({ profiles }) => {
    const [selectedProfile, setSelectedProfile] = useState(null)

    const toggleDisplayProfiles = (profile) => {
        if (selectedProfile === profile) {
            setSelectedProfile(null)
        } else {
            setSelectedProfile(profile)
        }
    }

    return <>
        <div className="TeamProfiles__block">
            {profiles.map(profile => <div
                key={profile.node.id}
                className="TeamProfiles__imageBlock"
                onClick={() => toggleDisplayProfiles(profile)}>
                <GatsbyImage className="TeamProfiles__image"
                    image={profile.node.featureImageSharp.childImageSharp.gatsbyImageData}
                    alt={`${profile} image`} />
                <div className="TeamProfiles__imageOverlayBlock">
                    <div className="TeamProfiles__name">{profile.node.title}</div>
                    <img className={`TeamProfiles__arrow ${selectedProfile === profile ? `active` : null}`}
                        src={selectedProfile === profile ? ArrowLight : ArrowDark}
                        alt="upArrow"
                    />
                </div>
            </div>
            )}
        </div>
        {selectedProfile &&
            <div className="TeamProfiles__descriptionBlock">
                <div className="TeamProfiles__descriptionBlock--inner container">
                    <div className="TeamProfiles__closeIcon" onClick={() => toggleDisplayProfiles(selectedProfile)}>&#10005;</div>
                    <div className="TeamProfiles__selectedProfileBlock">
                        <GatsbyImage className="TeamProfiles__selectedProfileImage"
                            image={selectedProfile.node.featureImageSharp.childImageSharp.gatsbyImageData}
                            objectFit="cover"
                            alt={`${selectedProfile.node.title} image`} />
                        <div className="TeamProfiles__descriptionTextBlock">
                            <div className="TeamProfiles__selectedProfileName">{selectedProfile.node.title}</div>
                            <section
                                className="TeamProfiles__description"
                                dangerouslySetInnerHTML={{ __html: selectedProfile.node.html }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
}

TeamProfiles.propTypes = {
    profiles: PropTypes.any,
}

export default TeamProfiles
