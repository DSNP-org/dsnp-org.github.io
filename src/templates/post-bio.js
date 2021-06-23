// import React from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import { Helmet } from 'react-helmet'
//
// import { Layout } from '../components/common'
// import { MetaData } from '../components/common/meta'
//
// /**
// * Single post view (/:slug)
// *
// * This file renders a single post and loads all the content.
// *
// */
// const BioPost = ({ data, location }) => {
//     const post = data.ghostPost
//
//     return (
//         <>
//             <MetaData
//                 data={data}
//                 location={location}
//                 type="article"
//             />
//             <Helmet>
//                 <style type="text/css">{`${post.codeinjection_styles}`}</style>
//             </Helmet>
//             <Layout>
//                 <div className="container">
//                     <article className="content">
//                         <section className="post-full-content">
//                             <h1 className="content-title">{post.title}</h1>
//                             <hr className="post-card-separator-line"/>
//                             { post.feature_image ?
//                                 <img className="post-card-profile-image" src={post.feature_image} alt = { post.title } />
//                                 : null
//                             }
//                             <section
//                                 className="content-body load-external-scripts"
//                                 dangerouslySetInnerHTML={{ __html: post.html }}
//                             />
//                         </section>
//                     </article>
//                 </div>
//             </Layout>
//         </>
//     )
// }
//
// BioPost.propTypes = {
//     data: PropTypes.shape({
//         ghostPost: PropTypes.shape({
//             codeinjection_styles: PropTypes.object,
//             title: PropTypes.string.isRequired,
//             html: PropTypes.string.isRequired,
//             feature_image: PropTypes.string,
//             published_at_pretty: PropTypes.string.isRequired,
//             primary_author: PropTypes.shape({
//                 name: PropTypes.string.isRequired,
//                 profile_image: PropTypes.string,
//             }).isRequired,
//         }).isRequired,
//     }).isRequired,
//     location: PropTypes.object.isRequired,
// }
//
// export default BioPost
//
// export const postQuery = graphql`
//     query($slug: String!) {
//         ghostPost(slug: { eq: $slug }) {
//             ...GhostPostFields
//         }
//     }
// `
