import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div class="botnav">
            <a class="active" href="Dashboard">
                Dashboard
            </a>

            <a href="ChatBot">ChatBot</a>

            <a href="Diary">Diary</a>
        </div>
    )
}

export default Navbar
