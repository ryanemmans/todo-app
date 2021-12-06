import React from 'react';
import {When} from 'react-if';

import { LoginContext } from './context.js';
import { FormGroup, InputGroup, Button, Icon } from '@blueprintjs/core';
import './login.scss';

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <section className="login">
        <When condition={this.context.loggedIn}>
          <Button onClick={this.context.logout} intent="primary" large="large">Log Out</Button>
        </When>

        <When condition={!this.context.loggedIn}>
          <FormGroup className="loginForm" onSubmit={this.handleSubmit}>
            <InputGroup
              className="loginInput"
              leftElement={<Icon icon="user" />}
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <InputGroup
              className="loginInput"
              leftElement={<Icon icon="key" />}
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            <Button className="loginButton" intent="primary">Login</Button>
          </FormGroup>
        </When>
      </section>
    );
  }
}

export default Login;
