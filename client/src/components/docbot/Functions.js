import React, { Component } from "react"


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
}

export default App
