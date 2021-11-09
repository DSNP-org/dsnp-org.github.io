import React from "react";

const DevPortalNav = () => {
    let navItems = [
        {
            name: `Introduction`,
            href: `../dev-portal-introduction`,
            class: `DevPortalNav__link`,
        },
        {
            name: `Spec ↗`,
            href: `https://spec.dsnp.org/`,
            class: `DevPortalNav__link`,
            external: true,
        },
        {
            name: `Testnet`,
            href: `../dev-portal-testnet`,
            class: `DevPortalNav__link`,
        },
        {
            name: `SDK`,
            href: `../dev-portal-sdk`,
            class: `DevPortalNav__link`,
        },
        {
            name: `Example Client`,
            href: `../dev-portal-example-client`,
            class: `DevPortalNav__link`,
        },
        {
            name: `Community`,
            href: `../dev-portal-community`,
            class: `DevPortalNav__link`,
        },
        {
            name: `Conduct`,
            href: `../dev-portal-conduct`,
            class: `DevPortalNav__link`,
        },
    ];

    const nav = navItems.map((navItem, index) => {
        if (navItem.href.includes(window.location.pathname)) {
            navItems[
                index
            ].class = `DevPortalNav__link DevPortalNav__link--active`;
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
        );
    });

    return <nav className="DevPortalNav__block">{nav}</nav>;
};

export default DevPortalNav;
