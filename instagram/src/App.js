import React, { Component } from 'react';
import './reset.css';
import './App.css';
import dummyData from './dummy-data';
import PostsPage from './components/PostsPage/PostsPage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({ 
      posts: dummyData.map((post, index) => (
        {...post, postID: index, liked: false}
      )) 
    })
  }

  searchDidUpdate = (e, searchText) => {
    e.preventDefault();
    const filtered = dummyData.filter(post => searchText === post.username)
    if (filtered.length > 0) {
      this.setState({postData: filtered})
    } else {
      this.setState({postData: dummyData})
    }
}
  
  likeDidUpdate = (postID, newLiked) => {
    this.setState({
      postData: this.state.postData.map(post => {
        if (post.postID === postID) {
          return {...post, liked: newLiked}
        }
        return post;
      })
    })
}

  likesCountDidUpdate = (postID, newLikes) => {
    this.setState({
      postData: this.state.postData.map(post => {
        if (post.postID === postID) {
          return {...post, likes: newLikes}
        }
        return post;
      })
    })
}

  newCommentDidUpdate = (postID, newComments) => {
    this.setState({
        posts: this.state.posts.map(post => {
        if (post.postID === postID) {
          return {...post, comments: newComments}
          }
          return post;
        })
    })
}

  render() {
    return (
      <div className="App">
        <PostsPage 
          searchDidUpdate={this.searchDidUpdate}
          newCommentDidUpdate={this.newCommentDidUpdate}
          likeDidUpdate={this.likeDidUpdate}
          likesCountDidUpdate={this.likesCountDidUpdate}
          posts={this.state.posts}
        />
      </div>
    );
  }
}

export default App;
