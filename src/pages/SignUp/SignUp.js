import React, { Component } from 'react';
import './SignUp.css';
import { IoLogoGoogle, IoLogoFacebook, IoLogoTwitter, IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';

class SignUp extends Component {
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
            <div className="sign-up-container">
                <div className="sign-up-wrapper">
                    <div className="sign-up-left">
                        <h1>Already Have An Account?</h1>
                        <p>
                            Sign in to get up-to-date information!
                        </p>
                        <Link to="/sign-in">
                            <button type="submit" className="sign-up-btn">Sign In</button>
                        </Link>
                    </div>

                    <div className="sign-up-right">
                        <h1>Sign Up</h1>

                        <form>
                            <div id="name-inputs">
                                <div className="fname-input">
                                    <label htmlFor="fname">First Name</label><br />
                                    <input type="text" name="fname" placeholder="Your first name" className="fname" />
                                </div>

                                <div className="lname-input">
                                    <label htmlFor="lname">Last Name</label><br />
                                    <input type="text" name="lname" placeholder="Your last name" className="lname" />
                                </div>
                            </div>

                            <div id="email-input">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Enter your email" />
                            </div>


                            <div id="password-inputs">
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

                                <label htmlFor="password">Confirmed Password</label>
                                <div className="password">
                                    <input
                                        id="confirmedPassword"
                                        type={isRevealPassword ? "text" : "password"}
                                        name="confirmedPassword"
                                        placeholder="Enter your comfirmed password"
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

                            <button type="submit" className="sign-up-btn">sign up</button>
                        </form>


                        <p className="sign-up-social-title">Or Sign Up By Using</p>
                        <div className="social-sign-up-icons-group">
                            <button type="submit" className="social-single-sign-up">
                                <IoLogoGoogle className="social-icons" />
                            </button>
                            <button type="submit" className="social-single-sign-up">
                                <IoLogoFacebook className="social-icons" />
                            </button>
                            <button type="submit" className="social-single-sign-up">
                                <IoLogoTwitter className="social-icons" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
