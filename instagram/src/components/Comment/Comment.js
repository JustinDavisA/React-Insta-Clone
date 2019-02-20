// React Imports
import React from 'react';
import PropTypes from 'prop-types';
// CSS Imports
import './Comment.css';

const CommentSection = props => {
    return (
        < div className="comment-container" >
            <h1 className="comment-username">{props.comment.username}</h1>
            <p className="comment-text">{props.comment.text}</p>
        </div >
    )
}

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Comment;