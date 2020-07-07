import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { loginUser } from "../../actions/authActions"
import classnames from "classnames"
import "./Login.css"
import Logo from "../../img/icons/anchorFinal.png"

class Login extends Component {
    state = {
        email: "",
        password: "",
        errors: {},
    }

    // cWRP = Component recieves new props.
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard")
        }
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
        const userData = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(userData) // redirect handled within the component
    }

    render() {
        const { errors } = this.state
        return (
            <div>
                <div>
                    <div className="hero-imagelogin">
                        <div class="animate__animated animate__fadeIn animate__delay-100ms">
                            <div className="hero-text">
                                <img src={Logo} alt="mainlogo"></img>
                                <div className="loginwrapper">
                                    <h2>Login</h2>
                                    <span>
                                        {" "}
                                        {errors.email} {errors.emailnotfound}{" "}
                                    </span>
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <div>
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.email}
                                                error={errors.email}
                                                id="email"
                                                type="email"
                                                placeholder="Email"
                                                className={classnames("", {
                                                    invalid:
                                                        errors.email ||
                                                        errors.emailnotfound,
                                                })}
                                            />
                                        </div>
                                        <div>
                                            <span>
                                                {" "}
                                                {errors.password}{" "}
                                                {errors.passwordincorrect}{" "}
                                            </span>
                                            <input
                                                onChange={this.onChange}
                                                value={this.state.password}
                                                error={errors.password}
                                                id="password"
                                                type="password"
                                                placeholder="Password"
                                                className={classnames("", {
                                                    invalid:
                                                        errors.password ||
                                                        errors.passwordincorrect,
                                                })}
                                            />

                                            <div className="rememberme">
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id="checkbox"
                                                    ></input>
                                                    <label for="checkbox">
                                                        Remember me
                                                    </label>
                                                </div>
                                                <div id="forgotlink">
                                                    <label>
                                                        Forgot your password?
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="buttonscontainer">
                                                <Link to="/">
                                                    <button className="backBtn">
                                                        Back to home
                                                    </button>
                                                </Link>{" "}
                                                <button className="loginButton">
                                                    Login
                                                </button>
                                            </div>
                                            <p>
                                                Don't have an account?{" "}
                                                <Link to="/register">
                                                    <div>
                                                        <button>
                                                            Register Here
                                                        </button>
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
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
})

export default connect(mapStateToProps, { loginUser })(Login)
