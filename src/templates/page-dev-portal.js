import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
 * Single page (/:slug)
 *
 * This file renders a single page and loads all the content.
 *
 */
const DevPortal = ({ data, location }) => {
    const page = data.ghostPage

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
            />
            <Helmet>
                <style type="text/css">{`${page.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
                        <header className="PageDevPortal__header">
                            <h1 className="PageDevPortal__title">DSNP Developer Portal</h1>
                            <div className="PageDevPortal__subTitle">Everything here is open source.</div>
                        </header>
                        <h2 className="content-title" data-aos="fade-right" data-aos-duration="1400">{page.title}</h2>

                        {/* The main page content */}
                        <section
                            className="content-body load-external-scripts"
                            dangerouslySetInnerHTML={{ __html: page.html }}
                        />
                    </article>
                </div>
            </Layout>
        </>
    )
}

DevPortal.propTypes = {
    data: PropTypes.shape({
        ghostPage: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default DevPortal

export const postQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
    }
`
