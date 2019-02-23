// React Imports
import React from 'react';
import './Feedback.css'
import emptyheart from '../../assets/heart.svg';
import filledheart from '../../assets/heart-filled.png'
import comment from '../../assets/comment.png'

const Feedback = props => {
    return (
        <div
            className="like-section"
            key="likes-icons-container"
            onClick={props.incrementLike}
        >
            <div>
                <button
                    className="heart"
                    onClick={props.toggleLike}
                >
                    <img
                        height='40'
                        alt="like"
                        src={!props.liked ? emptyheart : filledheart}
                    ></img>
                </button>
            </div>

            <div>
                <button
                    className="comment"
                >
                    <img
                        height='40'
                        alt="comment"
                        src={comment}
                    ></img>
                </button>
            </div>

            <div>
                <p className="likes">{props.likes} likes</p>
            </div>
        </div>
    )
}

export default Feedback;