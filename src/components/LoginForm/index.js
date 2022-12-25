// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmit: false, errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmit: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data, response)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  usernameValue = event => {
    this.setState({username: event.target.value})
  }

  passwordValue = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showSubmit, errorMsg} = this.state

    return (
      <div className="login-form-container">
        <div className="login-img-box">
          <img
            className="login-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>

        <div className="login-box">
          <form className="login-form" onSubmit={this.submitForm}>
            <img
              className="login-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
            <label htmlFor="username">USERNAME</label>
            <input
              type="username"
              id="username"
              value={username}
              onChange={this.usernameValue}
              placeholder="Username"
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.passwordValue}
              placeholder="Password"
            />
            <button type="submit" className="login-btn">
              Login
            </button>
            {showSubmit ? <p className="error">{errorMsg}</p> : ''}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
