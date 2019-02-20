// React Imports
import React from 'react';
import PropTypes from 'prop-types';
// Image Imports
import IGLogo from '../../assets/iglogo.png'
import CameraLogo from '../../assets/camera.svg'
import HeartLogo from '../../assets/heart.svg'
import CompassLogo from '../../assets/compass.png'
import UserLogo from '../../assets/user.png'
// CSS Imports
import './Post.css';
// Component Imports
import PostContainer from './PostContainer/PostContainer'
import SearchBar from './SearchBar/SearchBar'

const PostsPage = props => {
    return (
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
                searchDidUpdate={props.searchDidUpdate}
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
            {props.posts.map((post, i) => (
                <PostContainer
                    key={i}
                    postData={post}
                    postID={post.postID}
                    newCommentDidUpdate={props.newCommentDidUpdate}
                    likeDidUpdate={props.likeDidUpdate}
                    likesCountDidUpdate={props.likesCountDidUpdate} />
            ))}
        </div>
    );
}

export default PostsPage;