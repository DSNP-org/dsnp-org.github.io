import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
* Navigation component
*
* The Navigation component takes an array of your Ghost
* navigation property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
* You can pass it a custom class for your own styles, but it will always fallback
* to a `site-nav-item` class.
*
*/
const Navigation = ({ data, navClass }) => {
    const getClassName = (navItem) => {
        const currentPage = typeof window !== `undefined` ? window.location.pathname : null
        if (currentPage === navItem.url) {
            return `${navClass} selectedNavItem`
        }
        return navClass
    }

    return <>
        {data && data.map((navItem, i) => {
            if (navItem.url.match(/^\s?http(s?)/gi)) {
                return <a className={getClassName(navItem)} href={navItem.url} key={i} target="_blank"
                    rel="noopener noreferrer">{navItem.label}</a>
            } else {
                return <Link className={getClassName(navItem)} to={navItem.url} key={i}>{navItem.label}</Link>
            }
        })}
    </>
}

Navigation.defaultProps = {
    navClass: `site-nav-item`,
}

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    navClass: PropTypes.string,
    currentPage: PropTypes.string,
}

export default Navigation
