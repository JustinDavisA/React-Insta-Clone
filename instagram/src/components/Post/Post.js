// React Imports
import React from 'react';
import PropTypes from 'prop-types';
// Component Imports
import CommentSection from '../CommentSection/CommentSection';
import Feedback from '../Feedback/Feedback';
//import PostHeader from './PostHeader';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
    };

    render() {
        return (
            <div>
                <div className="post-header">
                    <div className="post-thumb-wrapper">
                        <img
                            alt="post header"
                            className="post-thumb"
                            src={this.props.post.thumbnailUrl}
                        />
                    </div>
                    <div>{this.props.post.username}</div>
                </div>
               
                <div>
                    <img
                        alt="Post Image"
                        className="post-image"
                        src={this.props.post.imageUrl}
                    />
                </div>

                <Feedback
                    incrementLike={this.incrementLike}
                    likes={this.state.likes}
                />
                
                <CommentSection
                    postId={this.props.post.imageUrl}
                    comments={this.props.post.comments}
                />
            </div>
        );
    }
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired
    })
};

export default Post;