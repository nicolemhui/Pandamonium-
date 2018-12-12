import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <label>
          Username: 
          <input type="text" 
            className="session-input-field"
            value={this.state.username}
            onChange={this.handleChange('username')}
          />
        </label>
    } else {
      usernameInput = ""
    }

    return (
      <div className="login-signup-form-container">
        <div className="pandamonium-header">
          <h2>{this.props.formType}</h2>
        </div>
        <div className="mid-content">
          <form className="login-signup-form" onSubmit={this.handleSubmit}>
            <div className="errors">{this.renderErrors()}</div>
            {usernameInput}
            <br/>
            <label> 
              Email: 
              <input type="text" 
                className="session-input-field"
                value={this.state.email} 
                onChange={this.handleChange('email')}
              />
            </label>
            <br/>
            <label>
              Password:
              <input type="text"
                className="session-input-field"
                value={this.state.password}
                onChange={this.handleChange('password')}
              />
            </label>
            <br/>
            <input type="submit"
              className="session-submit-btn"
              value={this.props.formType}
            />
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