import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { auth } from './components/utils/Firebase';
import CardDisplay from './components/CardDisplay';

class App extends Component {

  state = {
    user: undefined,
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      console.log('Auth state changed', user);
      if (user) {
        this.setState({
          user,
        });
      } else {
        auth.signInWithEmailAndPassword('REDACTED@gmail.com', 'password')
          .then((signedInUser) => {
            this.setState({
              user: signedInUser,
            })
          })
          .catch((err) => {
            auth.createUserWithEmailAndPassword('REDACTED@gmail.com', 'password')
              .then((newUser) => {
                this.setState({
                  user: newUser,
                })
              })
              .catch((err) => {
                console.error(err);
              })
          })
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {
            this.state.user === undefined ?
            <span>Loading...</span> :
            <CardDisplay />
          }
        </header>
      </div>
    );
  }
}

export default App;
