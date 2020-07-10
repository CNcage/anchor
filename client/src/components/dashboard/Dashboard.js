import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { logoutUser } from "../../actions/authActions"
import "./Dashboard.css"
import Navbar from "../layout/Navbar"
import { FcSettings } from "react-icons/fc"
import { FcPlus } from "react-icons/fc"
import { FcSms } from "react-icons/fc"
import { FcMindMap } from "react-icons/fc"
import { GiWorld } from "react-icons/gi"
import { FcSupport } from "react-icons/fc"
import { FcAssistant } from "react-icons/fc"
import { FcTwoSmartphones } from "react-icons/fc"

class Dashboard extends Component {
    state = {
        img:
            "https://i.guim.co.uk/img/media/8d56e47b642365ea41f2d0a7cee23fbd1dce6906/239_14_1614_968/master/1614.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=3f7a898d8ce9f4679f36addff28dc4e0",
        headline: "Loading...",
        news: "Loading...",
        link: "link velho",
        author: "",
        number: "test",
        published_date: "",
    }

    onLogoutClick = (e) => {
        e.preventDefault()
        this.props.logoutUser()
    }

    componentDidMount() {
        this.handleFetch()
    }

    handleFetch = () => {
        // let newImg = ""
        let newHeadline = ""
        let newNews = ""
        let newLink = "link novo"
        let newAuthor = ""
        let newPublishedDate = ""

        let newNumber = 19
        fetch(
            "https://covid-19-news.p.rapidapi.com/v1/covid?lang=en&media=True&q=covid",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "covid-19-news.p.rapidapi.com",
                    "x-rapidapi-key":
                        "22986ed8c5msh23013206b9938a8p185998jsn12d228c74794",
                },
            }
        )
            // fetch(
            //     "http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-09&sortBy=publishedAt&apiKey=dd3cd50950504064ac5b3bd0fda24657"
            // )
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.articles[1].url)
                newNumber = Math.floor(Math.random() * 10)
                newHeadline = data.articles[newNumber].title
                newNews = data.articles[newNumber].summary
                newLink = data.articles[newNumber].link
                // newImg = data.articles[1].media
                newAuthor = data.articles[newNumber].author
                newPublishedDate = data.articles[newNumber].published_date
                this.setState({ number: newNumber })
                this.setState({ author: newAuthor })
                // this.setState({ img: newImg })
                this.setState({ headline: newHeadline })
                this.setState({ news: newNews })
                this.setState({ link: newLink })
                this.setState({
                    published_date: newPublishedDate,
                })
            })
    }

    render() {
        const { user } = this.props.auth
        return (
            <div>
                <Navbar />
                <div className="dashboardbody">
                    <div className="newsbar">
                        <GiWorld size="60px" color="white" />
                        <h2>COVID-19 News</h2>
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
                            <br></br>
                            <p>Published on: {this.state.published_date}</p>
                        </div>
                    </div>
                    <div className="main-dashboard">
                        <div className="mainCards">
                            <div className="maincard-dash">
                                <div className="maincard1">
                                    <h4>This week</h4>
                                    <p>7 Logs</p>
                                </div>

                                <div className="maincard2">
                                    <h4>All time</h4>
                                    <p>72 Logs</p>
                                </div>
                            </div>
                            <div className="smallercards">
                                <div className="card-dash">
                                    <FcSms size={"150px"} />
                                    <h4>Messages</h4>
                                </div>

                                <div className="card-dash">
                                    <FcPlus size={"150px"} />
                                    <h4>Add Widget</h4>
                                </div>
                                <div className="card-dash">
                                    <FcMindMap size={"150px"} />
                                    <h4>Mental Health</h4>
                                </div>
                                <div className="card-dash">
                                    <FcAssistant size={"150px"} />
                                    <h4>Customer Support</h4>
                                </div>

                                <div className="card-dash">
                                    <FcSupport size={"150px"} />
                                    <h4>Report a bug</h4>
                                </div>
                                <div className="card-dash">
                                    <FcSettings size={"150px"} />
                                    <h4>Settings</h4>
                                </div>

                                <div className="card-dash">
                                    <FcTwoSmartphones size={"150px"} />
                                    <h4>Next of Kin</h4>
                                </div>
                            </div>
                        </div>
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
