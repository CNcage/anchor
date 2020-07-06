import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import Logo from "../../img/icons/anchorFinal.png"
import "./Dashboard.css"

class Dashboard extends Component {
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
                        <a class="active" href="Dashboard">
                            Dashboard
                        </a>

                        <a href="ChatBot">ChatBot</a>

                        <a href="Diary">Diary</a>
                    </div>

                    <div className="navLogout">
                        <p>
                            Welcome, <b>{user.name}</b>
                        </p>

                        <button className="button" onClick={this.onLogoutClick}>
                            Logout
                        </button>
                        <a
                            href="javascript:void(0);"
                            class="icon"
                            onclick="myFunction()"
                        >
                            <i class="fa fa-bars"></i>
                        </a>
                    </div>
                </div>
                <div className="body">
                    <h1>Welcome</h1>
                    <div className="cardwrapper">
                        <div className="card1">
                            <div className="cardTop"></div>
                            <div className="cardContent">
                                <div className="cardHeader">
                                    <img
                                        id="cardImg"
                                        src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/logs.png"
                                    ></img>
                                    <p>Total logs</p>
                                </div>
                                <div className="cardText">
                                    <h2>50</h2>
                                </div>
                            </div>
                            <button className="cardBottom">Connect</button>
                        </div>

                        <div className="card1"></div>
                        <div className="card1"></div>
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser })(Dashboard)
