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

  searchDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.fetchUser(this.props.username);
    }
  }
  
  heartDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.fetchUser(this.props.username);
    }
  }

  likesCounthDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.fetchUser(this.props.username);
    }
  }

  newCommentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      this.fetchUser(this.props.username);
    }
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
