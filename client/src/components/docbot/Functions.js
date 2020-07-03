import React, { Component } from "react"


class App extends Component {
    render() {
        return (
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
        )
    }
}

export default DocBotFunk