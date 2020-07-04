import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import jwt_decode from "jwt-decode"
import setAuthToken from "./utils/setAuthToken"
import { setCurrentUser, logoutUser } from "./actions/authActions"

import { Provider } from "react-redux"
import store from "./store"

import Navbar from "./components/layout/Navbar"
import Landing from "./components/layout/Landing"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"

import PrivateRoute from "./components/private-route/PrivateRoute"
import Dashboard from "./components/dashboard/Dashboard"

import DocBot from './components/docbot/DocBot';
import Diary from './components/diary/Diary';

//images
import DocBotPic from '../src/img/bot/docBot3.png'

// Check for token to keep user logged in

if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken
    setAuthToken(token)
    // Decode token and get user info and exp
    const decoded = jwt_decode(token)
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded))
    // Check for expired token
    const currentTime = Date.now() / 1000 // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser())
        // Redirect to login
        window.location.href = "./login"
    }
}

let newUser = false;
let docBot = DocBotPic
let userName = "Appa"
let loggedIn = "loggedinuser@email.com"

class App extends Component {

    set_date() {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${date}/${month}/${year}`
    }

    //console logging current state contents
    submitLog = () => {
        console.log(this.state)
    }

    //state, created during log to turn into a push request at the end
    state = {
        _id: loggedIn, // unique to the user logged in
        date: this.set_date(), // specific to the day it was written
        time: "", // the single specific entry  
        diary: []  // every dirary question and answer for that session
    }

    //functions to set the states
    set_feeling = (update) => {
        var newLog = this.state.diary.concat(
            {
                question: "How Are You Feeling?",
                answer: update
            });
        this.setState({ diary: newLog })
    }

    set_temp = (update) => {
        var newLog = this.state.diary.concat(
            {
                question: "What was your temp?",
                answer: update
            });
        this.setState({ diary: newLog })
    }

    set_cough = (update) => {
        var newLog = this.state.diary.concat(
            {
                question: "Continuous Cough?",
                answer: update
            });
        this.setState({ diary: newLog })
    }

    set_tasteSmell = (update) => {
        var newLog = this.state.diary.concat(
            {
                question: "Change in taste / smell?",
                answer: update
            });
        this.setState({ diary: newLog })
    }

    set_breathless = (update) => {
        var newLog = this.state.diary.concat(
            {
                question: "Breathless?",
                answer: update
            });
        this.setState({ diary: newLog })
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Switch>
                            <PrivateRoute
                                exact
                                path="/dashboard"
                                component={Dashboard}
                            />
                        </Switch>
                        <DocBot
                            docBot={docBot}
                            newUser={newUser}
                            userName={this.userName}
                            set_feeling={this.set_feeling}
                            set_temp={this.set_temp}
                            set_cough={this.set_cough}
                            set_tasteSmell={this.set_tasteSmell}
                            set_date={this.set_date}
                            consoleLog={this.consoleLog}
                            set_breathless={this.set_breathless}
                            submitLog={this.submitLog}
                        />
                        <Diary
                            userName={userName}
                            date={this.state.date}
                            time={this.state.time}
                            diary={this.state.diary}
                        />
                    </div>
                </Router>
            </Provider>
        )
    }
}
export default App
