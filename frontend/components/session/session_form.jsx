import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoClick = this.handleDemoClick.bind(this);
  };

  componentDidUpdate() {

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user);
  };

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  };

  handleDemoClick(e) {
    e.preventDefault();
    const user = { username: "demouser", password: "password", email: "demo@user.com" };
    this.props.action(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map( (error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
          ))}
      </ul>
    );
  }

  render() {
    let usernameInput;

    if (this.props.formType === "SIGN UP") {
      usernameInput = 
        <div>
          <label>
            <input type="text" 
              className="session-input-field"
              value={this.state.username}
              onChange={this.handleChange('username')}
              placeholder="Username"
              />
          </label>
          <br/>
        </div>
    } else {
      usernameInput = ""
    }

    return (
      <div className="login-signup-form-container">
        <div className="login-form-header">
          <div className="login-logo">
            <i className="fab fa-spotify"></i>
            <h1 className="header-logo">Pandamonium</h1>
          </div>
        </div>
        <div className="login-mid-section">
          <form className="login-signup-form" onSubmit={this.handleSubmit}>
            <div className="demo-btn">
              <button onClick={this.handleDemoClick}>DEMO USER</button>
            </div>

            <div>
              <fieldset className="login-separator">
                <legend align="center" className="or-separator" >OR</legend>
              </fieldset>
            </div>
            
            <div className="session-errors">{this.renderErrors()}</div>
            <br/>
            <label> 
              <input type="text" 
                className="session-input-field"
                value={this.state.email} 
                onChange={this.handleChange('email')}
                placeholder="Email"
              />
            </label>
            <br/>
            {usernameInput}
            <label>
              <input type="password"
                className="session-input-field"
                value={this.state.password}
                onChange={this.handleChange('password')}
                placeholder="Password"
              />
            </label>
            <br/>
            <div className="submit-row">
              <div className="remember-me">
                <input type="checkbox" id="remember" name="remember"/>
                <label htmlFor="remember">Remember me</label>
              </div>
              <input type="submit"
                className="session-submit-btn"
                value={this.props.formType}
              />
           </div>
           
          </form>
          <div className="nav-description"> 
            {this.props.navDescription}
            {this.props.navLink}
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;