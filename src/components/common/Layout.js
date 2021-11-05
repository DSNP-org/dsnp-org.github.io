import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import AOS from "aos"
import "aos/dist/aos.css"
if (typeof document !== `undefined`) {
    AOS.init()
}
import { Navigation } from '.'

// Styles
import '../../styles/App.scss'
import Blob1 from "../../images/parallax/blob-1.svg"
import Blob2 from "../../images/parallax/blob-2.svg"
import Blob3 from "../../images/parallax/blob-3.svg"
import Dots from "../../images/parallax/dots.svg"
import MultiNode from "../../images/parallax/multi-node.svg"
import SingleNode from "../../images/parallax/single-node.svg"
import Logo from "../../images/cms-images/DSNP_Logo@2x.png"

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const Layout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0]?.node
    const getWidth = (typeof window !== `undefined` ? window.innerWidth : null)
    const initialWidth = getWidth < 1300 ? true : false
    const [isMobile, setIsMobile] = useState(initialWidth)

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.addEventListener(`resize`, () => {
                if (window.innerWidth < 1300) {
                    setIsMobile(true)
                } else {
                    setIsMobile(false)
                }
            })
        }
    }, [])

    return (
        <ParallaxProvider>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="Layout__viewport">
                <div className="Layout__viewport--top">
                    {/* The main header section on top of the screen */}
                    <div className="Layout__contentContainer">
                        <header className="Layout__headerBlock">
                            <div className="Layout__mast">
                                <Link to="/">
                                    <img className="Layout__headerLogo" src={Logo} alt={site.title} />
                                </Link>
                            </div>
                            <div className="container">
                                <nav className="Layout__navigation">
                                    <div className="Layout__topNavigation">
                                        {/* The navigation items as setup in Ghost */}
                                        <Navigation data={site.navigation} navClass="Navigation__topNavigationItem" />
                                    </div>
                                </nav>
                                { isHome ?
                                    <div className="Layout__banner">
                                        <h1 className="Layout__bannerTitle" data-aos="fade-right" data-aos-duration="1400">The next generation of the internet</h1>
                                    </div> :
                                    null
                                }
                            </div>
                        </header>

                        <main className={isHome ? `Layout__main Layout__main--home` : `Layout__main`}>
                            {/* All the main content gets inserted here, newIndex.js, post.js */}
                            {children}
                        </main>
                    </div>
                </div>
                <div className="Layout__parallaxBlock">
                    {!isMobile && <>
                        <div className="Layout__parallax">
                            <Parallax y={[0, 0]} x={[30, 30]} tagOuter="figure"><img src={Blob1}/></Parallax>
                            <Parallax x={[-30, 20]} tagOuter="figure"><img src={Blob3}/></Parallax>
                        </div>
                        <div className="Layout__parallax">
                            <Parallax y={[-5, -200]}><img src={Dots} alt="dots"/></Parallax>
                            <Parallax y={[0, 100]}><img src={Dots} alt="dots"/></Parallax>
                        </div>
                        <div className="Layout__parallax">
                            <Parallax y={[-50, 0]} ><img src={Blob2} /></Parallax>
                            <Parallax y={[-80, -60]} styleOuter={{ transform: `rotate(90deg)` }}><img src={Dots} alt="dots"/></Parallax>
                        </div>
                        {isHome &&
                        <div className="Layout__parallax">
                            <Parallax y={[-100, 0]}><img src={SingleNode} alt="single-node"/></Parallax>
                            <Parallax y={[-125, 0]}><img src={MultiNode} alt="multi-node"/></Parallax>
                        </div>
                        }
                        <div className="Layout__parallaxBlock--front">
                            {!isHome && <div className="Layout__parallax">
                                <Parallax y={[-20, 0]}><img src={SingleNode} alt="single-node"/></Parallax>
                                <Parallax y={[-75, 70]}><img src={MultiNode} alt="multi-node"/></Parallax>
                            </div>}
                            <div className="Layout__parallax">
                                <Parallax y={[50, 100]}><img src={Dots} alt="dots"/></Parallax>
                                <Parallax y={[50, 100]}><img src={Dots} alt="dots"/></Parallax>
                            </div>
                            <div className="Layout__parallax">
                                <Parallax y={[50, 80]} x={[-15, 15]}><img src={Dots} alt="dots"/></Parallax>
                                <Parallax y={[200, 100]}><img src={Dots} alt="dots"/></Parallax>
                            </div>
                        </div>
                    </>
                    }
                    {isMobile && <>
                        <div className="Layout__parallax">
                            <Parallax y={[0, 0]} x={[50, 50]} tagOuter="figure"><img src={Blob1}/></Parallax>
                            <Parallax y={[-75, 20]} x={[-30, -20]} tagOuter="figure"><img src={Blob3}/></Parallax>
                        </div>
                        <div className="Layout__parallax">
                            <Parallax y={[30, -100]}><img src={Dots} alt="dots"/></Parallax>
                            <Parallax y={[0, 100]} x={[-30, 0]}><img src={Dots} alt="dots"/></Parallax>
                        </div>
                        <div className="Layout__parallax">
                            <Parallax y={[-50, 0]} ><img src={Blob2} /></Parallax>
                            <Parallax y={[-80, -60]} styleOuter={{ transform: `rotate(90deg)` }}><img src={Dots} alt="dots"/></Parallax>
                        </div>
                        <div className="Layout__parallax">
                            <Parallax y={[-100, -100]} x={[-70, -40]} styleOuter={{ transform: `rotate(90deg)` }}><img src={Dots} alt="dots"/></Parallax>
                            <Parallax y={[-50, 0]} x={[-25, -10]} ><img src={Blob2} /></Parallax>
                        </div>
                    </>
                    }
                </div>
            </div>
            <div className="Layout__viewport--bottom">
                {/* The footer at the very bottom of the screen */}
                <footer className="Layout__footer">
                    <div className="Layout__footerNavigation container">
                        <div className="Layout__footerNavigation--left">
                            <Link to="/">{site.title}</Link> © 2021
                        </div>
                        <div className="Layout__footerNavigation--right">
                            <Navigation data={site.secondary_navigation} navClass="site-foot-nav-item" />
                        </div>
                    </div>
                </footer>

            </div>
        </ParallaxProvider>
    )
}

Layout.propTypes = {
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
        render={data => <Layout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
