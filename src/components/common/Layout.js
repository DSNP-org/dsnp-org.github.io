import React from 'react'
import PropTypes from 'prop-types'
import { ParallaxProvider } from 'react-scroll-parallax'
import AOS from "aos"
import "aos/dist/aos.css"
if (typeof document !== `undefined`) {
    AOS.init()
}

// Styles
import '../../styles/app.css'
import '../../App.css'
import InnerLayout from "./InnerLayout"

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ children, bodyClass, isHome }) => (
    <ParallaxProvider>
        <InnerLayout isHome={isHome} bodyClass={bodyClass} >{children}</InnerLayout>
    </ParallaxProvider>
)

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
}

export default DefaultLayout
