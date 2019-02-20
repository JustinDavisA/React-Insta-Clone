// React Imports
import React from 'react';
import PropTypes from 'prop-types';
// Image Imports
import CommentLogo from '../../assets/camera.svg'
import HeartLogo from '../../assets/heart.svg'
// CSS Imports
import './PostContainer.css';
// Child Component Imports
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.posts.comments,
            likes: props.posts.likes,
            heart: props.posts.heart
        }
    } 

    render() {
        return (
            {props.posts.map(post => 
            <div key={post.timestamp} className='post-container'>
                <div className='post-head'>
                    <img width='40' height='40' className='user-image' src={post.thumbnailUrl} />
                    <h2>{post.username}</h2>
                </div>

                <div className='post-image'>
                    <img src={post.imageUrl} />
                </div>

                <div className='post-comment-section'>
                    <div className='post-icons'>
                        <img width='40' height='40' src={HeartLogo} className='heart-icon' />
                        <img width='40' height='40' src={CommentLogo} className='comment-icon' />
                    </div>

                    <div className='post-likes'>
                        <p><strong>{post.likes} likes</strong></p>
                    </div>

                    <div className='post-comments'>
                        {post.comments.map((comment, i ) => (
                            <Fragment key={i}>
                                <p><strong>{comment.username} </strong>{comment.text}</p>      
                            </Fragment>
                        ))}
                    </div>

                    <div className='post-date'>
                        <h3>{post.timestamp}</h3>
                    </div>

                    <div className='post-new-comment'>
                        <input className='comment-input' placeholder='Add a comment...'></input>
                        <div className='comment-submit'>
                            <strong>...</strong>
                        </div>
                    </div>
                </div> 
            </div>
            )}
        );
    }
}

PostContainer.propTypes = {
    postContainer: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired
                })
            )
        })
    )
}

PostContainer.defaultProps = {
    postContainer: []
}

export default PostContainer;