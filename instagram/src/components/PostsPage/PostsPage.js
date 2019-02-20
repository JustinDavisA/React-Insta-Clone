// React Imports
import React from 'react';
// Image Imports
import IGLogo from '../../assets/iglogo.png'
import CameraLogo from '../../assets/camera.svg'
import HeartLogo from '../../assets/heart.svg'
import CompassLogo from '../../assets/compass.png'
import UserLogo from '../../assets/user.png'
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
            posts: []
        }
    }

    componentDidMount() {
        this.setState({
            posts: dummyData.map((post, index) => (
                { ...post, postID: index, liked: false }
            ))
        })
    }

    searchDidUpdate = (e, searchText) => {
        e.preventDefault();
        const filtered = dummyData.filter(post => searchText === post.username)
        if (filtered.length > 0) {
            this.setState({ postData: filtered })
        } else {
            this.setState({ postData: dummyData })
        }
    }

    likeDidUpdate = (postID, newLiked) => {
        this.setState({
            postData: this.state.postData.map(post => {
                if (post.postID === postID) {
                    return { ...post, liked: newLiked }
                }
                return post;
            })
        })
    }

    likesCountDidUpdate = (postID, newLikes) => {
        this.setState({
            postData: this.state.postData.map(post => {
                if (post.postID === postID) {
                    return { ...post, likes: newLikes }
                }
                return post;
            })
        })
    }

    newCommentDidUpdate = (postID, newComments) => {
        this.setState({
            posts: this.state.posts.map(post => {
                if (post.postID === postID) {
                    return { ...post, comments: newComments }
                }
                return post;
            })
        })
    }

    clearLocalStorage = e => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    };

    render() {
        return (
            <div>
                <header>
                    <div className='head-left'>
                        <img
                            height='50'
                            className='camera-logo'
                            src={CameraLogo}
                            alt='Camera Image'
                        />

                        <div className='vert-line'></div>

                        <img
                            height='50'
                            className='ig-logo'
                            src={IGLogo}
                            alt='Instagram Logo Image'
                        />
                    </div>

                    <SearchBar
                        searchDidUpdate={this.searchDidUpdate}
                    />

                    <div className='head-right'>
                        <img
                            height='50'
                            className='compass-logo'
                            src={CompassLogo}
                            alt='Compass Image'
                        />

                        <img
                            height='50'
                            className='heart-logo'
                            src={HeartLogo}
                            alt='Heart Image'
                        />

                        <img
                            height='50'
                            className='profile-logo'
                            src={UserLogo} alt='Profile Image'
                        />
                    </div>
                </header>

                <div className="posts-container">
                    {this.posts.map((post, i) => (
                        <PostContainer
                            key={i}
                            postData={post}
                            postID={post.postID}
                            newCommentDidUpdate={this.newCommentDidUpdate}
                            likeDidUpdate={this.likeDidUpdate}
                            likesCountDidUpdate={this.likesCountDidUpdate} />
                    ))}
                </div>
            </div>
        )
    }
}

export default PostsPage;