import React from "react"
import logo from "../images/react-icon-large.png"
export default function Navbar() {
    return (
        <nav className="navbar nav">
                <div className="d-flex align-content-center">
                        <img src={logo} className="ms-2 img-fluid nav--icon" alt="logo"/>
                        <h3 className="ms-3 mt-2 nav--logo_text">ReactFacts</h3>      
                </div>
                <div className="mt-2 me-3 d-flex justify-content-end">
                    <h4 className="nav--title">React Course - Project 1</h4>
                </div>
            
        </nav>
    )
}