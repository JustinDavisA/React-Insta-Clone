import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = props => {
    return (
        <div className='post-container'>
            <div className='post-head'>
                <img 
                    width='40' 
                    height='40' 
                    className='user-image' 
                    src={props.posts.thumbnailUrl} 
                />
                <h2>{props.posts.username}</h2>
            </div>

            <div className='post-image'>
                <img src={props.posts.imageUrl} />
            </div>
        </div>
    );
}

PostContainer.propTypes = {
    PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    })
}

export default PostContainer;