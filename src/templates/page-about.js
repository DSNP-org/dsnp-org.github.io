import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Ethos, Governance, Layout, Mission, Pagination, WhoWeAre } from '../components/common'
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
    const missionPosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPageMission`))
    const whoWeArePosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPageWhoWeAre`))
    const governancePosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPageGovernance`))
    const ethosPosts = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPagePrinciples`))

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
            <Layout>
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
                    <div id="governance" className="PageAbout__fullHeightSection">
                        <Governance governanceCards={governancePosts} />
                    </div>
                    <div id="ethos" className="PageAbout__whoWeAreTextBlock PageAbout__fullHeightSection" >
                        <Ethos ethosCards={ethosPosts} />
                    </div>

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
