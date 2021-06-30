import React, { useState } from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import PropTypes from 'prop-types'
import ArrowDark from "../../../images/arrow-btn-dark.svg"
import ArrowLight from "../../../images/arrow-button-light.svg"

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
                <GatsbyImage className="WhoWeAreProfiles__image"
                    image={profile.node.featureImageSharp.childImageSharp.gatsbyImageData}
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
                        <GatsbyImage className="WhoWeAreProfiles__selectedProfileImage"
                            image={selectedProfile.node.featureImageSharp.childImageSharp.gatsbyImageData}
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
