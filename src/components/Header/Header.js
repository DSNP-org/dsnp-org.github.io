import React from "react"
import { Link } from "gatsby"
import Navigation from "./Navigation"

const Header = () => (
    <div className="Header__block">
        <Link to="/Home"><h1>DSNP.org</h1></Link>
        <Navigation />
    </div>
)

export default Header
