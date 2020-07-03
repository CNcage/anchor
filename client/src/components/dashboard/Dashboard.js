import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import "./Dashboard.css"

class Dashboard extends Component {
    onLogoutClick = (e) => {
        e.preventDefault()
        this.props.logoutUser()
    }

    render() {
        const { user } = this.props.auth
        return (
            <div>
                <div className="topnav">
                    <p>Welcome, {user.name}</p>
                    <img
                        alt="logo"
                        className="logo"
                        src="{https://files.slack.com/files-pri/T0117BU39LG-F017257V0DN/anchorfinal.png}"
                    ></img>
                    <button className="button" onClick={this.onLogoutClick}>
                        Logout
                    </button>
                </div>
                <h1>Welcome to ANCHOR HEALTH</h1>
                <div className="wrapper">
                    <div className="card">
                        <div id="cardwrap">
                            <img
                                id="docBot"
                                src="https://flash.force.com/contactus/resource/chatbot_images/images/CTA.png"
                                alt="docBot"
                            ></img>
                            <h1>DocBot</h1>
                            <p>Hi!{user.name} Are you ready to connect?</p>
                            <div>
                                <button id="docButton">Connect</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div id="cardwrap">
                            <div id="book"></div>
                            <h1>35</h1>
                            <p>Logs this week</p>
                        </div>
                    </div>
                    <div className="card">
                        <div id="cardwrap">
                            <h1>3 Times</h1>
                            <p>You felt breathless</p>
                        </div>
                    </div>
                </div>
                <div className="diary">
                    <div id="cardwrap">
                        <h1>Diary</h1>
                        <p>Monday</p>
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
