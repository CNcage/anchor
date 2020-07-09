import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import "./Dashboard.css"
import Navbar from "../layout/Navbar"

class Dashboard extends Component {
    state = {
        headline: "Loading...",
        news: "Loading...",
        link: "link velho",
        img: "",
    }

    onLogoutClick = (e) => {
        e.preventDefault()
        this.props.logoutUser()
    }

    componentDidMount() {
        this.handleFetch()
    }

    handleFetch = () => {
        let newHeadline = ""
        let newNews = ""
        let newLink = "link novo"
        let newImg = ""
        fetch(
            "http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-09&sortBy=publishedAt&apiKey=dd3cd50950504064ac5b3bd0fda24657"
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data.articles[2].url)
                newHeadline = data.articles[2].title
                newNews = data.articles[2].description
                newLink = data.articles[2].url
                newImg = data.articles[2].urlToImage
                this.setState({ img: newImg })
                this.setState({ headline: newHeadline })
                this.setState({ news: newNews })
                this.setState({ link: newLink })
            })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <h2>Latest News</h2>
                </div>

                <div className="card-news">
                    <a
                        href={this.state.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={this.state.img} alt="newsImg"></img>
                        <h2>{this.state.headline}</h2>
                    </a>
                    <p>{this.state.news}</p>
                </div>

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
