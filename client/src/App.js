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
import docBot1 from '../src/img/bot/docBot1.png';
import docBot2 from '../src/img/bot/docBot2.png';
import docBot3 from '../src/img/bot/docBot3.png'

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

let userName = "Appa";
let newUser = false;
let docBot = docBot3

class App extends Component {

    set_date() {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${date}/${month}/${year}`
    }

    state = {
        id: "", // unique to the user logged in
        date: "", // specific to the day it was written
        time: "", // the single specific entry  
        timeofDay: "Morning",
        mornFeels: "Updates incoming..",
        mornTemp: "",
        breathless: "",
        tasteSmell: "",
        cough: "",
        dateNow: this.set_date(),
    }

    set_cough = (update) => {
        this.setState({
            cough: update
        })
    }
    set_tasteSmell = (update) => {
        this.setState({
            tasteSmell: update
        })
    }
    set_mornFeels = (update) => {
        this.setState({
            mornFeels: update
        })
    }
    set_mornTemp = (update) => {
        this.setState({
            mornTemp: update
        })
    }
    set_breathless = (update) => {
        this.setState({
            breathless: update
        })
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
                            newUser={newUser}
                            userName={userName}
                            set_date={this.set_date}
                            consoleLog={this.consoleLog}
                            set_mornFeels={this.set_mornFeels}
                            set_mornTemp={this.set_mornTemp}
                            set_breathless={this.set_breathless}
                            set_tasteSmell={this.set_tasteSmell}
                            set_cough={this.set_cough}
                            docBot={docBot}
                        />
                        <Diary
                            userName={userName}
                            breathless={this.state.breathless}
                            timeofDay={this.state.timeofDay}
                            mornFeels={this.state.mornFeels}
                            mornTemp={this.state.mornTemp}
                            dateNow={this.state.dateNow}
                            tasteSmell={this.state.tasteSmell}
                            cough={this.state.cough}
                        />
                    </div>
                </Router>
            </Provider>
        )
    }
}
export default App
