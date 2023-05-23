import Axios from 'axios'

import { Component } from 'react'




import "./Login.css"

class Login extends Component {
    state = {
        Username: "",
        Password: "",
        showError: false
    }

    onChangeUsername = (event) => {
        this.setState({ Username: event.target.value })
    }

    onChangePassword = (event) => {
        this.setState({ Password: event.target.value })
    }

    onClickLogin = async (event) => {
        event.preventDefault()
        const { Username, Password } = this.state

        const response = await post("http://localhost:5000/login", { Username, Password })

        if (response.statusText === "OK") {
            const data = await response.data
            console.log(data)
            console.log("response received")
        }


    }

    render() {
        const { Username, Password, showError } = this.state


        return (
            <div className='login-container'>
                <div>
                    <img src="https://imgs.bharatmatrimony.com/bmimgs/login/login-otp-banner.png" alt="login" className='login-image' />
                </div>
                <form className='login-form' onSubmit={this.onClickLogin}>
                    <h1 className='heading'>User Login</h1>
                    <input type="text" placeholder='Username' value={Username} className='input-field' onChange={this.onChangeUsername} />
                    <input type="password" placeholder='Password' value={Password} className='input-field' onChange={this.onChangePassword} />
                    {showError && <p className='error-msg'>*The Username or Password you entered is incorrect</p>}
                    <button tyep="submit" className='login-button'>Login</button>
                </form>
            </div>
        )
    }
}

export default Login