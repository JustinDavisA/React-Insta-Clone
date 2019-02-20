// React Imports
import React from 'react';
import './Feedback.css'
import emptyheart from '../../assets/heart.svg';
import filledheart from '../../assets/heart-filled.png'
import comment from '../../assets/comment.png'

const ActionBar = props => {
    return (
        <div className="action-bar-container">
            <div className="new-interaction-bar">
                <button 
                    className="heart"
                    onClick={props.toggleLike}
                >
                <img 
                    alt="like" 
                    src={!props.liked ? emptyheart : filledheart}
                ></img>
                </button>
                <button className="comment"><img alt="comment" src={comment}></img></button>
            </div>
            <p className="likes">{props.likes} likes</p>
        </div>
    )
}

export default ActionBar;