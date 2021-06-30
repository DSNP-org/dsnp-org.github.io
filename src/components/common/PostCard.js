import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    return (
        <Link to={url} className="PostCard__block">
            <header>
                {post.tags && <div className="PostCard__tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
                <div className="PostCard__titleBlock">
                    <h2 className="PostCard__title" >{post.title}</h2>
                    <p className="PostCard__date">{post.published_at_pretty}</p>
                </div>
            </header>
            <section className="PostCard__excerpt">{post.excerpt}</section>
            <footer className="PostCard__footer">
                <div className="PostCard__footer--left">
                    <p className="PostCard__author">By { post.primary_author.name }</p>
                </div>
                <div className="PostCard__footer--right">
                </div>
            </footer>
        </Link>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        published_at_pretty: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
