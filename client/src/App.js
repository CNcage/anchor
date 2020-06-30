import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    state = {
        form_name: '',
        form_email: '',
        form_password: ''
    }
    formData = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    submitForm = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify({
            email: this.state.form_email,
            password: this.state.form_password
        })
        const newreg = await axios.post('/register', body, config);
        const newregd = await axios.get('/registered', body, config);

        console.log(newreg.data);
        console.log(newregd.data);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <label htmlFor="form_name">Name:</label>
                    <input type="name" name="form_name" onChange={this.formData} />

                    <label htmlFor="form_email">email address:</label>
                    <input type="email" name="form_email" onChange={this.formData} />

                    <label htmlFor="form_password">Password:</label>
                    <input type="password" name="form_password" onChange={this.formData} />

                    <button type="submit">Register User</button>
                </form>
            </div>
        )
    }
}


export default App;