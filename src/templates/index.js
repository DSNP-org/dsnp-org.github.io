import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Parallax } from 'react-scroll-parallax'
import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'
import ContentCard from "../components/common/ContentCard"
import { ParallaxProvider } from 'react-scroll-parallax'
import ClickDrag from "../images/ClickDrag.svg"
import Blob1 from "../images/blob-1.svg"
import Blob2 from "../images/blob-2.svg"
import Blob3 from "../images/blob-3.svg"

/**
* Main index page (home page)
*
* Shows intro information.
*
*/
const Index = ({ data, location }) => {
    const site = data.allGhostPage.edges[0].node
    const cards = data.allGhostPost.nodes

    let parser = new DOMParser()
    const siteContent = parser.parseFromString(site.html, `text/html`).body

    const getSiteContent = (element, index) => {
        if (element.tagName === `P`) {
            return <p key={index}>
                {element.innerText}
            </p>
        } else if (element.tagName === `H2`) {
            return <h2 key={index}>
                {element.innerText}
            </h2>
        } else if (element.tagName === `H3`) {
            return <h3 key={index}>
                {element.innerText}
            </h3>
        } else if (element.innerText !== undefined) {
            return <div key={index}>{element.innerText}</div>
        }
        return <></>
    }

    return (
        <ParallaxProvider>
            <MetaData location={location}/>
            <Layout isHome={true}>
                {/*<Parallax y={[-40, 20]} tagOuter="figure"><img className="Index__blob2" src={Blob2} /></Parallax>*/}
                {/*<Parallax y={[-80, 20]} tagOuter="figure"><img className="Index__blob3" src={Blob3} /></Parallax>*/}
                <div className="container">
                    <div className="ContentCard__blockTitle">The Unfinished Ecosystem</div>
                    <div className="ContentCard__block">
                        <img src={ClickDrag} alt="click-drag" className="ContentCard__clickDrag" />
                        {cards.map((cardData, index) => <ContentCard cardData={cardData} key={index} index={index + 1}/>)}
                    </div>
                    { Array.prototype.map.call(siteContent.childNodes, (element, index) => getSiteContent(element, index))}
                </div>
            </Layout>
        </ParallaxProvider>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPage: PropTypes.object.isRequired,
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
  query GhostPageQuery {
    allGhostPage(filter: {slug: {eq: "home"}}) {
        edges {
            node {
                title
                html
            }
        }
    }
    allGhostPost(filter: {tags: {elemMatch: {name: {eq: "#HomePage"}}}}) {
    nodes {
      plaintext
      title
    }
  }
  }
`
