<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from 'react'
=======
import React, { useEffect, useState, useRef } from 'react'
>>>>>>> 4192fcb (wip)
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Ethos, Governance, Layout, Mission, Pagination, WhoWeAre, Ecosystem } from '../components/common'
=======
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Ethos, Governance, Layout, Mission, Pagination, WhoWeAre } from '../components/common'
>>>>>>> 309dd38 (toggle working on who we are and other additions)
import { MetaData } from '../components/common/meta'

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
    const page = data.ghostPage
    const missionPosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPageMission`))
    const whoWeArePosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPageWhoWeAre`))
<<<<<<< HEAD
<<<<<<< HEAD
    const governancePosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPageGovernance`))
    const ethosPosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPagePrinciples`))
    const ecosystemPosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPageEcosystem`))
=======

    const missionRef = useRef(null)
    const whoWeAreRef = useRef(null)
    const governanceRef = useRef(null)
    const ethosRef = useRef(null)

    // const [activeSection, setActiveSection] = useState(`mission`)
>>>>>>> 4192fcb (wip)
=======
    const governancePosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPageGovernance`))
    const ethosPosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPagePrinciples`))
>>>>>>> 309dd38 (toggle working on who we are and other additions)

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
<<<<<<< HEAD
<<<<<<< HEAD
            <Layout>
                <div className="container">
                    <h1 className="PageAbout__h1">{page.title}</h1>
                </div>
                <div className="PageAbout__block">
                    {page.title === `Who We Are` && <>
                        <div id="mission" className="PageAbout__fullHeightSection">
                            <Mission missionCards={missionPosts} />
                        </div>
                        <div id="whoWeAre" className="PageAbout__whoWeAreTextBlock PageAbout__fullHeightSection" >
                            <WhoWeAre whoWeAreCards={whoWeArePosts} />
                        </div>
                    </>
                    }
                    {page.title === `Guiding Principles` && <>
                        <div id="governance" className="PageAbout__fullHeightSection">
                            <Governance governanceCards={governancePosts} />
                        </div>
                        <div id="ethos" className="PageAbout__whoWeAreTextBlock PageAbout__fullHeightSection" >
                            <Ethos ethosCards={ethosPosts} />
                        </div>
                    </>}
                    {page.title === `Ecosystem` && <>
                        <Ecosystem ecosystemPosts={ecosystemPosts} />
                    </>}
=======
            <Layout isAbout={true}>
=======
            <Layout>
>>>>>>> 716206e (tags fixed)
                <nav className="PageAbout__navBlock container">
                    <AnchorLink href="#mission" >Mission</AnchorLink>
                    <AnchorLink href="#whoWeAre" >Who We Are</AnchorLink>
                    <AnchorLink href="#governance" >Governance</AnchorLink>
                    <AnchorLink href="#ethos" >Guiding Principles</AnchorLink>
                </nav>
                <div className="PageAbout__block">
                    <div id="mission" className="PageAbout__fullHeightSection">
                        <Mission missionCards={missionPosts} />
                    </div>
                    <div id="whoWeAre" className="PageAbout__whoWeAreTextBlock PageAbout__fullHeightSection" >
                        <WhoWeAre whoWeAreCards={whoWeArePosts} />
                    </div>
<<<<<<< HEAD
                    <div id="governance" className="PageAbout__fullHeightSection" ref={governanceRef}>Governance</div>
                    <div id="ethos" className="PageAbout__whoWeAreTextBlock PageAbout__fullHeightSection" ref={ethosRef}>Ethos</div>
>>>>>>> 4192fcb (wip)
=======
                    <div id="governance" className="PageAbout__fullHeightSection">
                        <Governance governanceCards={governancePosts} />
                    </div>
                    <div id="ethos" className="PageAbout__whoWeAreTextBlock PageAbout__fullHeightSection" >
                        <Ethos ethosCards={ethosPosts} />
                    </div>
>>>>>>> 309dd38 (toggle working on who we are and other additions)

                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    )
}

PageAbout.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
        ghostPage: PropTypes.object.isRequired,
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
  query GhostAboutQuery($limit: Int, $skip: Int, $slug: String!) {
    ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
    }
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
