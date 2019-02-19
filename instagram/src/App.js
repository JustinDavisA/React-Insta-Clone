import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData })
  }
  
  render() {
    return (
      <div className="app-container">
        <SearchBar />

        <div className='posts-container'>
          <PostContainer posts = {this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
