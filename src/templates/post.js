import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost
    const [postType, setPostType] = useState(``)

    useEffect(() => {
        post.tags.map((tag) => {
            if (tag.name === `#BlogPost`) {
                setPostType(`blog`)
            }
        })
    }, [post])

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="container">
                    <article className="content">
                        <section className="Post__contentBlock">
                            <h1 className="content-title">{post.title}</h1>
                            {(postType === `blog`) &&
                                <>
                                    <div className="Post__author">
                                        <span>{ post.primary_author.name }</span>
                                    </div>
                                    <p className="Post__publishedDate">{post.published_at_pretty}</p>
                                    <hr className="Post__separatorLine"/>
                                </>
                            }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                    </article>
                </div>
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
            published_at_pretty: PropTypes.string.isRequired,
            tags: PropTypes.array.isRequired,
            primary_author: PropTypes.shape({
                name: PropTypes.string.isRequired,
                profile_image: PropTypes.string,
            }).isRequired,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
