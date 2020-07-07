import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import Logo from "../../img/icons/anchorFinal.png"
import "./Dashboard.css"
import { Link } from "react-router-dom"
import Navbar from "../layout/Navbar"

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
                <Navbar />
                <div className="body">
                    <h1>Welcome</h1>
                    <div className="cardwrapper">
                        <div className="card1">
                            {/* <div className="cardTop"></div> */}
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
