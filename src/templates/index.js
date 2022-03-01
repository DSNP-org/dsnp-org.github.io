import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import IndexPostCard from "../components/common/IndexPostCard"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import ScrollContainer from 'react-indiana-drag-scroll'
import 'react-alice-carousel/lib/alice-carousel.css'
import { generateKey } from "../utils/keyGenerator"
import UpArrow from "../images/arrow-btn-dark.svg"

/**
* Main index page (home page)
*
* Shows intro information.
*
*/
const Index = ({ data, location }) => {
    const posts = data.allGhostPost.nodes

    const whatWeDo = posts.filter(post => post.tags.some(tag => tag.name === `#HomePageWhatWeDo`))
    const cards = posts.filter(card => card.tags.some(tag => tag.name === `#HomePageEcosystemCard`))
    const ecosystemCards = [cards[2], cards[1], cards[3], cards[0]]

    return (
        <ParallaxProvider>
            <div className="Index__block">
                <MetaData
                    data={data}
                    location={location}
                    type="website"
                />
                <Layout isHome={true}>
                    <div className="container">
                        <div>
                            <section className="Index__banner" dangerouslySetInnerHTML={{ __html: whatWeDo[1].html }} />
                            <Link to="/about-what-is-dsnp/" target="_blank" className="Index__arrowButtonBlock">
                                <img className="Index__arrowButton" src={UpArrow} alt="up-arrow-button"/>
                                <div>Read more about the DSNP.</div>
                            </Link>
                        </div>
                        <div className="Index__bodyBlock">
                            <div className="Index__PostCardBlockTitle" data-aos="fade-right" data-aos-duration="1400">
                                Get Started
                            </div>
                        </div>
                    </div>
                    <Parallax>
                        <ScrollContainer className="Index__postCardBlock" >
                            {ecosystemCards.map((cardData, index) => <IndexPostCard cardData={cardData} key={generateKey(cardData.title)} index={index + 1}/>)}
                        </ScrollContainer>
                    </Parallax>
                </Layout>
            </div>
        </ParallaxProvider>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
}

export default Index

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostIndexQuery {
    ghostPage(slug: { eq: "home" }) {
            ...GhostPageFields
    }
    allGhostPost(filter: {tags: {elemMatch: {name: {in: ["#HomePage", "#HomePagePartners"]}}}}) {
        nodes {
            title
            html
            id
            tags {
                name
            }
            excerpt
        }
    }
  }
`
