import React, { useEffect, useState } from "react"

const DevPortalNav = () => {
    let navItems = [
        {
            name: `Introduction`,
            href: `../developer-portal/`,
            class: `DevPortalNav__link`,
        },
        {
            name: `Getting Started`,
            href: `../developer-portal-getting-started/`,
            class: `DevPortalNav__link`,
        },
        {
            name: `Spec ↗`,
            href: `https://spec.dsnp.org/`,
            class: `DevPortalNav__link`,
            external: true,
        },
        {
            name: `Contribute + Community`,
            href: `../developer-portal-community/`,
            class: `DevPortalNav__link`,
        },
        {
            name: `Code of Conduct`,
            href: `../code-of-conduct/`,
            class: `DevPortalNav__link`,
        },
        {
            name: `Security Vulnerabilities`,
            href: `../developer-portal-security-vulnerabilities/`,
            class: `DevPortalNav__link`,
        },
    ]

    const [currentPage, setCurrentPage] = useState()

    useEffect(() => {
        setCurrentPage(
            typeof window !== `undefined` && window.location.pathname
        )
    }, [typeof window !== `undefined` && window.location.pathname])

    const nav = navItems.map((navItem, index) => {
        if (navItem.href.includes(currentPage)) {
            navItems[
                index
            ].class = `DevPortalNav__link DevPortalNav__link--active`
        }

        return (
            <a
                className={navItem.class}
                key={index}
                href={navItem.href}
                target={navItem.external && `_blank`}
            >
                {navItem.name}
            </a>
        )
    })

    return <nav className="DevPortalNav__block">{nav}</nav>
}

export default DevPortalNav
