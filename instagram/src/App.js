import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostsPage/PostsPage'
import Authenticate from './components/Authenticate/Authenticate';
import Login from "./components/Login/Login";

const UserDisplay = Authenticate(PostsPage)(Login)

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  render() {
    return (
      <div className="App">
        <UserDisplay />
      </div>
    );
  }
}

export default App;
