import React from "react";
import axios from 'axios';

class Login extends React.Component {
  state= {
    credentials: {
      username: '',
      password: '',
      error: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  };

  
  login = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', this.state.credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      this.props.history.push('/bubblepage')
    })
    .catch(err => {
      console.log(err.response.error);
        this.setState({
            credentials: {
              ...this.state.credentials,
              error: err.response.data.error
            }
      })

    })
  };
  
  render () {
    return (
      <div>
      <h1>Welcome to the Bubble App!</h1>
        <div data-testid="loginForm" className="login-form">
          <form onSubmit={this.login}>
              <label>Username</label>
              <input 
                type= 'text'
                name= 'username'
                id='username'
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
              <label>Password</label>
              <input 
                id='password'
                name='password'
                type='password'
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              <button id="error">Login</button>
          </form>
        </div>
      
      <p id="error" className="error">{this.state.credentials.error}</p>
      </div>
      );
  };
  
};

  export default Login;
  
//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"