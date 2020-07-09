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
        author: "",
        number: "test",
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
        let newAuthor = ""
        let newNumber = 1
        fetch(
            "http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-09&sortBy=publishedAt&apiKey=dd3cd50950504064ac5b3bd0fda24657"
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data.articles[1].url)
                newNumber = Math.floor(Math.random() * 10)
                newHeadline = data.articles[1].title
                newNews = data.articles[1].description
                newLink = data.articles[1].url
                newImg = data.articles[1].urlToImage
                newAuthor = data.articles[1].source.name
                this.setState({ number: newNumber })
                this.setState({ author: newAuthor })
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
                <div className="dashboardbody">
                    <div className="newsbar">
                        <h2>Latest News</h2>

                        <div className="card-news">
                            <a
                                href={this.state.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={this.state.img} alt="newsImg"></img>
                                <h3>{this.state.headline}</h3>
                            </a>
                            <p>{this.state.news}</p>
                            <p>{this.state.author}</p>
                        </div>
                        <div className="card-news">
                            <a
                                href={this.state.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={this.state.img} alt="newsImg"></img>
                                <h3>{this.state.headline}</h3>
                            </a>
                            <p>{this.state.news}</p>
                            <p>{this.state.author}</p>
                        </div>
                        <div className="card-news">
                            <a
                                href={this.state.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={this.state.img} alt="newsImg"></img>
                                <h3>{this.state.headline}</h3>
                            </a>
                            <p>{this.state.news}</p>
                            <b>
                                <p>{this.state.author}</p>
                            </b>
                        </div>
                    </div>
                    <div className="main-dashboard">
                        <h1>Users Dashboard {this.state.number}</h1>
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
