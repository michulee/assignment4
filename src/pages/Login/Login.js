import React, { Fragment } from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isAuthenticated: false};
    this.loginClick = this.loginClick.bind(this);
  }

  loginClick() {
    this.setState(auth => ({
      isAuthenticated: !auth.isAuthenticated
    }))
  }
  
  render() {
    return (
      <Fragment>
        <h1>Login</h1>
        <button onClick={this.loginClick}>{this.state.isAuthenticated ? 'LoggedIn' : 'NotLogged'}</button>
      </Fragment>
    );
  }
}

// function Login() {
//   return (
//     <Fragment>
//       <h1>Login</h1>
//       {/* <FakeText /> */}
//     </Fragment>
//   );
// }

export default Login;
