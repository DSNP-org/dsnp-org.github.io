import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Collapsible, Panel } from "cinch-collapsible"
import { Layout, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'
import { generateKey } from "../utils/keyGenerator"
import FaqPostCard from "../components/common/FaqPostCard"

/**
 * FAQ page
 *
 * Shows FAQ questions and Answers.
 *
 */

const PageFaq = ({ data, location, pageContext }) => {
    const page = data.ghostPage
    const faqCards = data.allGhostPost.nodes

    return (
        <>
            <MetaData location={location} />
            <Layout>
                <div className="container">
                    <h1 className="content-title" data-aos="fade-right" data-aos-duration="1400">{page.title}</h1>
                    <FaqPostCard
                        faqCards={faqCards}
                    />
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    )
}

PageFaq.propTypes = {
    data: PropTypes.shape({
        ghostPage: PropTypes.object.isRequired,
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default PageFaq

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const faqQuery = graphql`
    query GhostFaqQuery($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
        allGhostPost(filter: {tags: {elemMatch: {name: {eq: "#FAQ"}}}}) {
            nodes {
              plaintext
              title
            }
        }
    }
`
