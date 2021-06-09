import React, { useEffect, useState } from 'react'
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
    const [showTopNavDropdown, setShowTopNavDropdown] = React.useState(false)
    const getWidth = (typeof window !== `undefined` ? window.innerWidth : null)
    const initialWidth = getWidth < 637 ? true : false
    const [isMobile, setIsMobile] = useState(initialWidth)

    useEffect(() => {
        if (typeof window !== `undefined`) {
            window.addEventListener(`resize`, () => {
                if (window.innerWidth < 637) {
                    setIsMobile(true)
                } else {
                    setIsMobile(false)
                }
            })
        }
    }, [])

    const otherNavItems = data.filter(navItem => !navItem.url.includes(`about`))
    const aboutNavItems = data.filter(navItem => navItem.url.includes(`about`))

    const getClassName = (navItem) => {
        const currentPage = typeof window !== `undefined` ? window.location.pathname : null
        if (currentPage === navItem.url) {
            if (currentPage.includes(`about`)) {
                return `${navClass} selectedNavItem--blue`
            }
            return `${navClass} selectedNavItem`
        } else if (navItem === `about` && currentPage.includes(`about`)) {
            return `${navClass} selectedNavItem`
        } else {
            return `${navClass}`
        }
    }

    const createHeaderNavLinks = () => {
        const otherNavItemElements = otherNavItems.map((navItem, i) => {
            if (navItem.url.match(/^\s?http(s?)/gi)) {
                return <a className={getClassName(navItem)} href={navItem.url} key={i} target="_blank"
                    rel="noopener noreferrer">{navItem.label}</a>
            } else {
                return <Link className={getClassName(navItem)} to={navItem.url} key={i}>{navItem.label}</Link>
            }
        })

        const aboutNavItemElements = aboutNavItems.map((navItem, i) => {
            if (navItem.url.match(/^\s?http(s?)/gi)) {
                return <a className={getClassName(navItem)} href={navItem.url} key={i} target="_blank"
                    rel="noopener noreferrer">{navItem.label}</a>
            } else {
                return <Link className={getClassName(navItem)} to={navItem.url} key={i}>{navItem.label}</Link>
            }
        })

        return <>
            {otherNavItemElements}
            <div onMouseEnter={() => setShowTopNavDropdown(true)}
                onMouseLeave={() => setShowTopNavDropdown(false)}
            >
                <div className={`site-nav-item-dropdown-trigger-block ${getClassName(`about`)}`}>
                    <div onClick={() => setShowTopNavDropdown(!showTopNavDropdown)}>About</div>
                    <div
                        className={
                            showTopNavDropdown
                                ? `site-nav__dropdownIcon`
                                : `site-nav__dropdownIcon--closed`
                        }
                        style={{ marginLeft: 10, fontSize: 16 }}
                    >
                        ❯
                    </div>
                </div>
                {showTopNavDropdown &&
                    <div className={`site-nav-item-dropdown-menu ${isMobile && `isMobile`}`}>
                        {aboutNavItemElements}
                    </div>
                }
            </div>
        </>
    }

    const createFooterNavLinks = () => <>
        {data && data.map((navItem, i) => {
            if (navItem.url.match(/^\s?http(s?)/gi)) {
                return <a className={getClassName(navItem)} href={navItem.url} key={i} target="_blank"
                    rel="noopener noreferrer">{navItem.label}</a>
            } else {
                return <Link className={getClassName(navItem)} to={navItem.url} key={i}>{navItem.label}</Link>
            }
        })}
    </>

    return <>
        {navClass === `site-nav-item` ?
            createHeaderNavLinks() :
            createFooterNavLinks()
        }
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
