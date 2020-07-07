import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { registerUser } from "../../actions/authActions"
import classnames from "classnames"
import "./Resgister.css"
import Logo from "../../img/icons/anchorFinal.png"

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
            <div className="hero-imagesignup">
                <div className="animate__animated animate__fadeIn animate__delay-100ms">
                    <div className="hero-text">
                        <img src={Logo} alt="mainlogo"></img>
                        <div className="signupwrapper">
                            <div id="signUp">
                                <div>
                                    <div>
                                        <h2>Register</h2>
                                    </div>
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <div>
                                            <span>{errors.name}</span>
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.name}
                                                error={errors.name}
                                                id="name"
                                                type="text"
                                                placeholder="Name"
                                                className={classnames("", {
                                                    invalid: errors.name,
                                                })}
                                            />
                                        </div>
                                        <div>
                                            <span>{errors.email}</span>
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                error={errors.email}
                                                id="email"
                                                type="email"
                                                placeholder="Email"
                                                className={classnames("", {
                                                    invalid: errors.name,
                                                })}
                                            />
                                        </div>
                                        <div>
                                            <span>{errors.password}</span>
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.password}
                                                error={errors.password}
                                                id="password"
                                                type="password"
                                                placeholder="Password"
                                                className={classnames("", {
                                                    invalid: errors.name,
                                                })}
                                            />
                                        </div>
                                        <div>
                                            <span>{errors.password2}</span>
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.password2}
                                                error={errors.password2}
                                                id="password2"
                                                type="password"
                                                placeholder="Confirm Password"
                                                className={classnames("", {
                                                    invalid: errors.name,
                                                })}
                                            />
                                        </div>
                                        <div>
                                            <div className="btnWrap">
                                                <Link to="/">
                                                    <button id="backBtn">
                                                        Back to home
                                                    </button>
                                                </Link>
                                                <button
                                                    className="signupButton"
                                                    type="submit"
                                                >
                                                    Sign up
                                                </button>
                                            </div>
                                            <p>
                                                Already have an account?{" "}
                                                <Link to="/login">
                                                    <div>
                                                        <button>Log in</button>
                                                    </div>
                                                </Link>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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
