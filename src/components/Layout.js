import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import "../../src/App.css"

const Layout = ({ children }) => (
    <div className="Layout__block">
        <div className="Layout__content">
            <Header />
            {children}
        </div>
        <Footer />
    </div>
)

export default Layout
