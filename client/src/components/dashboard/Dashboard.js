import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import "./Dashboard.css"
import Navbar from "../layout/Navbar"

class Dashboard extends Component {
    onLogoutClick = (e) => {
        e.preventDefault()
        this.props.logoutUser()
    }

    render(props) {
        return (
            <div>
                <Navbar />
                <div className="sidenav"></div>
                <div className="footer"></div>
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
