import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { registerUser } from "../../actions/authActions"
import classnames from "classnames"
import "./Resgister.css"

class Register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        password2: "",
        errors: {},
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            })
        }
    }
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard")
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        }

        this.props.registerUser(newUser, this.props.history)
    }

    render() {
        const { errors } = this.state
        return (
            <div className="wrapper">
                <div id="signUp">
                    <div className="col-s8-offset-s2">
                        <Link to="/">
                            <button>Back to home</button>
                        </Link>
                        <div style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Register</b> below
                            </h4>
                            <p>
                                Already have an account?{" "}
                                <Link to="/login">Log in</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                    className={classnames("", {
                                        invalid: errors.name,
                                    })}
                                />
                                <label htmlFor="name">Name</label>
                                <span>{errors.name}</span>
                            </div>
                            <div>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    className={classnames("", {
                                        invalid: errors.name,
                                    })}
                                />
                                <label htmlFor="email">Email</label>
                                <span>{errors.email}</span>
                            </div>
                            <div>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.name,
                                    })}
                                />
                                <label htmlFor="password">Password</label>
                                <span>{errors.password}</span>
                            </div>
                            <div>
                                <input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.name,
                                    })}
                                />
                                <label htmlFor="password2">
                                    Confirm Password
                                </label>
                                <span>{errors.password2}</span>
                            </div>
                            <div style={{ paddingLeft: "11.250px" }}>
                                <button
                                    style={{
                                        width: "150px",
                                        borderRadius: "3px",
                                        etterSpacing: "1.5px",
                                        marginTop: "1rem",
                                    }}
                                    type="submit"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

//mSTProps allows us to get our state from Redux and map it to props which we can use inside components.
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
})

//prop-types is used to document the intended types of properties passed to components.
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, { registerUser })(withRouter(Register))
