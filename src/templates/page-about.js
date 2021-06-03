import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Layout, Mission, Pagination, WhoWeAre } from '../components/common'
import { MetaData } from '../components/common/meta'
import { Parallax } from "react-scroll-parallax"
import SingleNode from "../images/parallax/single-node.svg"
import MultiNode from "../images/parallax/multi-node.svg"
import Dots from "../images/parallax/dots.svg"

/**
 * About page
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
const PageAbout = ({ data, location, pageContext }) => {
    const posts = data.allGhostPost.edges
    const missionPosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPageMission`))
    const whoWeArePosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPageWhoWeAre`))

    const missionRef = useRef(null)
    const whoWeAreRef = useRef(null)
    const governanceRef = useRef(null)
    const ethosRef = useRef(null)

    // const [activeSection, setActiveSection] = useState(`mission`)

    useEffect(() => {
        const handleScroll = () => {}

        window.addEventListener(`scroll`, handleScroll)
        return () => {
            window.removeEventListener(`scroll`, handleScroll)
        }
    }, [])

    return (
        <>
            <MetaData location={location} />
            <Layout isAbout={true}>
                <nav className="PageAbout__navBlock container">
                    <AnchorLink href="#mission" >Mission</AnchorLink>
                    <AnchorLink href="#whoWeAre" >Who We Are</AnchorLink>
                    <AnchorLink href="#governance" >Governance</AnchorLink>
                    <AnchorLink href="#ethos" >Ethos</AnchorLink>
                </nav>
                <div className="PageAbout__block">
                    <h1 className="container content-title" data-aos="fade-right" data-aos-duration="1400">About</h1>

                    <div id="mission" className="PageAbout__fullHeightSection" ref={missionRef}>
                        <Mission missionCards={missionPosts} />
                    </div>
                    <div id="whoWeAre" className="PageAbout__whoWeAreTextBlock PageAbout__fullHeightSection" ref={whoWeAreRef}>
                        <WhoWeAre whoWeAreCards={whoWeArePosts} />
                    </div>
                    <div id="governance" className="PageAbout__fullHeightSection" ref={governanceRef}>Governance</div>
                    <div id="ethos" className="PageAbout__whoWeAreTextBlock PageAbout__fullHeightSection" ref={ethosRef}>Ethos</div>

                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    )
}

PageAbout.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default PageAbout

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostAboutQuery($limit: Int, $skip: Int) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip,
        filter: {tags: {elemMatch: {name: {eq: "#AboutPage"}}}}
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
