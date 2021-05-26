import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import AOS from "aos"
import "aos/dist/aos.css"
if (typeof document !== `undefined`) {
    AOS.init()
}

import { Navigation } from '.'

// Styles
import '../../styles/App.css'
import '../../App.css'
import Blob1 from "../../images/blob-1.svg"
import Blob2 from "../../images/blob-2.svg"
import Blob3 from "../../images/blob-3.svg"
import UpArrow from "../../images/up-arrow-btn.svg"
import Dots from "../../images/dots.svg"
import MultiNode from "../../images/multi-node.svg"
import SingleNode from "../../images/single-node.svg"

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const homePage = data.allGhostPage.edges[0].node
    return (
        <ParallaxProvider>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
                script={[
                    {
                        src: `https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.2/paper-full.min.js`,
                        type: `text/javascript`,
                    },
                ]}
            </Helmet>

            <div className="viewport">
                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    <div className="content-container">
                        <header className="site-head">
                            <div className="site-mast">
                                <Link to="/">
                                    {site.logo ?
                                        <img className="site-logo" src={site.logo} alt={site.title} />
                                        : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                    }
                                </Link>
                            </div>
                            <div className="container">
                                <nav className="site-nav">
                                    <div className="site-nav-top">
                                        {/* The navigation items as setup in Ghost */}
                                        <Navigation data={site.navigation} navClass="site-nav-item" />
                                    </div>
                                </nav>
                                { isHome ?
                                    <div className="site-banner">
                                        <h1 className="site-banner-title" data-aos="fade-right" data-aos-duration="1400">{homePage.title}</h1>
                                        <p className="site-banner-desc">{site.description}</p>
                                        <img className="Layout__arrowButton" src={UpArrow} alt="up-arrow-button"/>
                                    </div> :
                                    null
                                }
                            </div>
                        </header>

                        <main className={isHome ? `site-main site-main-home` : `site-main`}>
                            {/* All the main content gets inserted here, newIndex.js, post.js */}
                            {children}
                        </main>
                    </div>
                </div>
                <div className="Parallax__block">
                    <div className="Header__parallax">
                        <Parallax y={[0, 0]} tagOuter="figure"><img className="Index__blob1" src={Blob1} /></Parallax>
                        <Parallax x={[-30, 30]} tagOuter="figure"><img className="Index__blob3" src={Blob3} /></Parallax>
                    </div>
                    <div className="Header__parallax">
                        <Parallax y={[-5, -200]}><img src={Dots} alt="dots"/></Parallax>
                        <Parallax y={[20, 200]}><img src={Dots} alt="dots"/></Parallax>
                    </div>
                    <div className="Header__parallax">
                        <Parallax y={[-40, 0]} styleOuter={{ position: `absolute`, left: -300 }}><img className="Index__blob2" src={Blob2} /></Parallax>
                    </div>
                    {isHome &&
                    <div className="Header__parallax">
                        <Parallax y={[-25, -30]} x={[-30, 0]}><img src={SingleNode} alt="single-node"/></Parallax>
                        <Parallax y={[-65, 60]}><img src={MultiNode} alt="multi-node"/></Parallax>
                    </div>
                    }
                    <div className="Header__parallax">
                        <Parallax y={[0, -60]} styleOuter={{ transform: `rotate(90deg)` }}><img src={Dots} alt="dots"/></Parallax>
                    </div>
                </div>
            </div>
            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="site-foot">
                    <div className="site-foot-nav container">
                        <div className="site-foot-nav-left">
                            <Link to="/">{site.title}</Link> © 2021
                        </div>
                        <div className="site-foot-nav-right">
                            <Navigation data={site.secondary_navigation} navClass="site-foot-nav-item" />
                        </div>
                    </div>
                </footer>

            </div>
        </ParallaxProvider>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
        allGhostPage: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                allGhostPage(filter: {slug: {eq: "home"}}) {
                    edges {
                        node {
                            title
                            html
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
