import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import PostsPage from './components/PostsPage/PostsPage'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
