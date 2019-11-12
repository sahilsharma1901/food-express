import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import Modal from '../../UI/Modal/Modal';
import Login from '../../Login/Login';
import Signup from '../../Signup/Signup';

class Header extends Component {
  state = {
    loggingIn: false,
    signingUp: false
  };

  handleLogin = () => {
    this.setState({ loggingIn: true, signingUp:false });
  };

  authRevoked = () => {
    this.setState({loggingIn:false, signingUp:false });
  }

  handleSignup = () => {
    this.setState({ signingUp: true, loggingIn: false });
  };

  render() { 
    return (
      <React.Fragment>
        <Modal show={this.state.loggingIn || this.state.signingUp} modalClosed={this.authRevoked}>
            {this.state.loggingIn ? <Login signup={this.handleSignup}/> : <Signup/>}
        </Modal>
        <div className={styles.Header}>
          <header>
            <NavLink className={styles.Logo} to="/">
              FoodExpress
            </NavLink>
            <nav className={styles.DesktopOnly}>
              <button onClick={this.handleSignup} className={styles.Signup}>
                Create an Account
              </button>
              <button onClick={this.handleLogin} className={styles.Login}>
                Login
              </button>
            </nav>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
