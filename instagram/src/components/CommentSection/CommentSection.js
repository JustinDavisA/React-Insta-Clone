// React Imports
import React from 'react';
import PropTypes from 'prop-types';
// CSS Imports
import './CommentSection.css';
// Component Imports
import Comment from '../Comment/Comment';

const CommentSection = props => {
    return (
        <div className="comments-container">
            {props.comments.map((comment, i) => (
                <Comment key={i} comment={comment} />
            ))}
        </div>
    )
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

CommentSection.defaultProps = {
    comments: []
}

export default CommentSection;