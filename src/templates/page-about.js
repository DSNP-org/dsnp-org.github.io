import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Pagination, Team } from '../components/common'
import { MetaData } from '../components/common/meta'
import Emergent from "../images/Emergent.png"
import Heritage from "../images/Heritage.png"

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
    const teamProfiles = posts.filter(post => post.node.tags.some(tag => tag.name === `#AboutPageTeam`))

    useEffect(() => {
        const handleScroll = () => {}

        window.addEventListener(`scroll`, handleScroll)
        return () => {
            window.removeEventListener(`scroll`, handleScroll)
        }
    }, [])

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
            />
            <Layout>
                <div className="container PageAbout__container" dangerouslySetInnerHTML={{ __html: page.html }}>
                </div>
                <div className="PageAbout__block">
                    {page.title === `Team` && <>
                        <div id="mission" className="PageAbout__fullHeightSection">
                            <Team teamProfiles={teamProfiles} />
                        </div>
                    </>
                    }
                    {page.title === `Mission & Purpose` && <>
                        <div className="container PageAbout__principlesImages">
                            <div className="PageAbout__principlesImgWrapper">
                                <img className="PageAbout__principlesImg" src={Emergent} alt="Emergent"/>
                            </div>
                            <div className="PageAbout__principlesImgWrapper">
                                <img className="PageAbout__principlesImg" src={Heritage} alt="Heritage"/>

                            </div>
                        </div>
                    </>
                    }
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
          featureImageSharp {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
        }
      }
    }
  }
`
