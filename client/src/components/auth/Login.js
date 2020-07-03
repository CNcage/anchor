import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {

    state = {
        email: "",
        password: "",
        errors: {}
    };

    // cWRP = Component recieves new props. 
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); 
        }
        if (nextProps.errors) {
            this.setState({
            errors: nextProps.errors
            });
        }
    }
  
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
            };
        this.props.loginUser(userData); // redirect handled within the component
    };

    render() {
        const { errors } = this.state;
        return (
            <div>
                <div style={{ marginTop: "4rem" }}>
                <div>
                    <Link to="/"><button>Back to home</button></Link>
                    <div style={{ paddingLeft: "11.250px" }}>
                        <h4> <b>Login</b> below</h4>
                        <p>Don't have an account? <Link to="/register">Register</Link></p>
                    </div>
                    <form noValidate onSubmit={this.onSubmit}>
                    <div>
                        <input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {invalid: errors.email || errors.emailnotfound})}
                        />
                        <label htmlFor="email">Email</label>
                        <span> {errors.email} {errors.emailnotfound} </span>
                    </div>
                    <div>
                        <input
                        onChange={this.onChange}
                        value={this.state.password}
                        error={errors.password}
                        id="password"
                        type="password"
                        className={classnames("", {invalid: errors.password || errors.passwordincorrect})}
                        />
                        <label htmlFor="password">Password</label>
                        <span> {errors.password} {errors.passwordincorrect} </span>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);