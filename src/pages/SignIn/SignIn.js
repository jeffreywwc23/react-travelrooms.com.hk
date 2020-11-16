import React, { Component } from 'react';
import './SignIn.css';
import { IoLogoGoogle, IoLogoFacebook, IoLogoTwitter, IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.passwordOneRef = React.createRef();
        this.passwordTwoRef = React.createRef();
        this.iconRevealPassword = React.createRef();

        this.state = {
            isRevealPassword: false,
        }
    }

    togglePassword = () => {
        this.setState({ isRevealPassword: !this.state.isRevealPassword });
    };

    render() {
        const { isRevealPassword } = this.state;
        return (
            <div className="sign-in-container">
                <div className="sign-in-wrapper">
                    <div className="sign-in-left">
                        <h1>Newcomers?</h1>
                        <p>
                            Sign up to enjoy member rewards and engage with our community!
                        </p>
                        <Link to="/sign-up">
                            <button type="submit" className="sign-in-btn">Sign Up</button>
                        </Link>
                    </div>

                    <div className="sign-in-right">
                        <h1>Sign In</h1>

                        <form>
                            <div id="email-input">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Enter your email" />
                            </div>


                            <div id="password-input">
                                <label htmlFor="password">Password</label>
                                <div className="password">
                                    <input
                                        id="password"
                                        type={isRevealPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter your password"
                                        onChange={this.onChange}
                                        ref={this.passwordOneRef}
                                    />
                                    <span onClick={(e) => this.togglePassword(e)} ref={this.iconRevealPassword}>
                                        {isRevealPassword ?
                                            <IoIosEye className="eye" />
                                            :
                                            <IoIosEyeOff className="eye" />
                                        }
                                    </span>
                                </div>
                            </div>

                            <button type="submit" className="sign-in-btn">sign in</button>
                        </form>


                        <p className="sign-in-social-title">Or Sign In By Using</p>
                        <div className="social-sign-in-icons-group">
                            <button type="submit" className="social-single-sign-in">
                                <IoLogoGoogle className="social-icons" />
                            </button>
                            <button type="submit" className="social-single-sign-in">
                                <IoLogoFacebook className="social-icons" />
                            </button>
                            <button type="submit" className="social-single-sign-in">
                                <IoLogoTwitter className="social-icons" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
