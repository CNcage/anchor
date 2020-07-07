import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import Logo from "../../img/icons/anchorFinal.png"
import "./Navbar.css"
import { Link } from "react-router-dom"

class Navbar extends Component {
    onLogoutClick = (e) => {
        e.preventDefault()
        this.props.logoutUser()
    }
    responsiveNav() {
        let x = document.getElementById("myTopnav")
        if (x.className === "topnav") {
            x.className += " responsive"
        } else {
            x.className = "topnav"
        }
    }

    render() {
        const { user } = this.props.auth
        return (
            <div>
                <div className="topnav" id="myTopnav">
                    <div className="navLogo">
                        <img alt="logo" className="logo" src={Logo}></img>
                        <p>ANCHOR HEALTH</p>
                    </div>
                    <div className="navLinks">
                        <Link to="/Dashboard">Dashboard</Link>
                        <Link to="/livediary">ChatBot</Link>
                        <Link to="Diary">Diary</Link>
                    </div>

                    <div className="navLogout">
                        <p>
                            Welcome, <b>{user.name}</b>
                        </p>

                        <button className="button" onClick={this.onLogoutClick}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Navbar)
