import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function PostContainer(props) {
    console.log(props);
    return (
        <>
            {props.posts.map(post => 
            <div key={post.timestamp} className='post-container'>
                <div>
                    <img src={post.thumbnailUrl} />
                    <h2>{post.username}</h2>
                </div>

                <div>
                    <img src={post.imageUrl} />
                </div>

                <div>
                    <img src='' className='heart-icon' />
                    <img src='' className='comment-icon' />
                </div>

                <h2>{post.likes}</h2>

                {/* <CommentSection /> */}
                {post.comments.map((comment, i ) => (
                    <Fragment key={i}>
                        <p>
                            <strong>{comment.username}</strong>
                            <p>{comment.text}</p>
                        </p>
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

export default PostContainer;