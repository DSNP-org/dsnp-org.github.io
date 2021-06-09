import React from 'react'
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
                { post.feature_image ?
                    <figure className="post-feature-image">
                        <img src={ post.feature_image } alt={ post.title } />
                    </figure> : null }
                <div className="container">
                    <article className="content">
                        <section className="post-full-content">
                            <h1 className="content-title">{post.title}</h1>
                            <div className="post-full-author-name">
                                <div className="post-card-avatar">
                                    {post.primary_author.profile_image ?
                                        <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                                        <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                                    }
                                </div>
                                <span>{ post.primary_author.name }</span>
                            </div>
                            <p className="post-card-published-date">{post.published_at_pretty}</p>
                            <hr className="post-card-separator-line"/>
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
