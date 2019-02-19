import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css'

function PostContainer(props) {
    console.log(props);
    return (
        <>
            {props.posts.map(post => 
            <div key={post.timestamp} className='post-container'>
                <div className='post-head'>
                    <img src={post.thumbnailUrl} />
                    <h2>{post.username}</h2>
                </div>

                <div>
                    <img src={post.imageUrl} />
                </div>

                <div>
                    <img src='../' className='heart-icon' />
                    <img src='../' className='comment-icon' />
                </div>

                <h2>{post.likes} <strong>likes</strong></h2>

                {/* <CommentSection /> */}
                {post.comments.map((comment, i ) => (
                    <Fragment key={i}>
                        <p><strong>{comment.username} </strong>{comment.text}</p>       
                    </Fragment>
                ))}

                <div>
                    <input></input>
                    <strong>...</strong>
                </div>
            </div>
            )}
        </>
    );
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