import React from "react"
import logo from "../Images/logo-nav.png"

const Nav = () => {
    return (
        <nav className="nav-container">
          <img src={logo} alt=""/>
          <h1>my travel journal</h1>
        </nav>
    )
}

export default Nav