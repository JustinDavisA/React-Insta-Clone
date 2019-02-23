// React Imports
import React, { Component } from 'react';

// CSS Imports
import './PostsPage.css';

// Component Imports
import PostContainer from '../PostContainer/PostContainer'
import SearchBar from '../SearchBar/SearchBar'

// Data Import
import dummyData from '../../dummy-data';



class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            searchPosts: []
        }
    }

    componentDidMount() {
        this.setState({ posts: dummyData })
    }

    searchUpdateHandler = e => {
        const posts = this.state.posts.filter(post => {
            if (post.username.includes(e.target.value)) {
                return post;
            }
        });
        this.setState({ searchPosts: posts });
    };

    render() {
        return (
            <div className = 'App'>
                <SearchBar
                    currentSearch={this.state.searchText}
                    searchUpdate={this.searchUpdateHandler}
                />

                <PostContainer
                    posts = {
                        this.state.searchPosts.length > 0
                            ? this.state.searchPosts
                            : this.state.posts
                    }
                />
            </div>
        );
    }
}

export default PostsPage;