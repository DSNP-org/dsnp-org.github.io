import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    console.log(post)

    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
                {post.featured && <span>Featured</span>}
                {post.feature_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}></div>}
                <div className="post-card-title-block">
                    <h2 className="post-card-title">{post.title}</h2>
                    <p className="post-card-date">{post.published_at_pretty}</p>
                </div>
            </header>
            <section className="post-card-excerpt">{post.excerpt}</section>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    <div className="post-card-avatar">
                        {post.primary_author.profile_image ?
                            <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
                            <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
                        }
                    </div>
                    <span>{ post.primary_author.name }</span>
                </div>
                <div className="post-card-footer-right">
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
