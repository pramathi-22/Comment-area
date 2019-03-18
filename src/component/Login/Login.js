import React, { Component } from 'react'
import social from '../../logo.svg'
import './Login.css'

export class Login extends Component {
    render() {
        return (
            <div>
                <div className="image-slider"></div>
                <div className="text-signin">
                    <p>Sign in with</p><br></br>
                </div>
                <div className="textbox">
                    <input className="mobile-no" type="text" placeholder="ENTER YOUR MOBILE NUMBER HERE" />
                </div>
                <div className="social-media-login">
                    <hr></hr>  
                </div>
                <div className="social-icons">
                    <img src={social} /><img src={social} />
                </div>
            </div>
        )
    }
}
export default Login