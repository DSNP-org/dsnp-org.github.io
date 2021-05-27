import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
 * FAQ page
 *
 * Shows FAQ questions and Answers.
 *
 */

const PageFaq = ({ data, location, pageContext }) => {
    const page = data.ghostPage

    useEffect(() => {
        if (typeof document !== `undefined`) {
            let faqItem = document.getElementsByClassName(`faq__item`)
            for (const item of faqItem){
                item.firstElementChild.addEventListener(`click`, () => {
                    item.lastElementChild.classList.toggle(`visible`)
                })
            }
        }
    }, [page])

    return (
        <>
            <MetaData location={location} />
            <Layout>
                <div className="container">
                    <h1 className="content-title" data-aos="fade-right" data-aos-duration="1400">FAQ</h1>
                    <section dangerouslySetInnerHTML={{ __html: page.html }}/>
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
    )
}

PageFaq.propTypes = {
    data: PropTypes.shape({
        ghostPage: PropTypes.object.isRequired,
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
    query allGhostPage($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
    }
`
