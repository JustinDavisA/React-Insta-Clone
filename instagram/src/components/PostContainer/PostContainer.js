// React Imports
import React from 'react';
import PropTypes from 'prop-types';
// CSS Imports
import './PostContainer.css';
// Child Component Imports
import Post from '../Post/Post';
import CommentSection from '../CommentSection/CommentSection';
import Feeback from '../Feedback/Feedback';
import CommentInput from '../CommentInput/CommentInput';

class PostContainer extends React.Component {
    constructor(props) {
        super();
        this.state = {
            comments: props.posts.comments,
            likes: props.posts.likes,
            liked: props.posts.liked
        }
    }

    addNewComment = (e, comment) => {
        e.preventDefault();
        if (comment.length > 0) {
            const newComment = {
                username: "jdavis",
                text: comment
            }
            this.setState({
                comments: [...this.state.comments, newComment]
            }, () => this.props.updateComments(this.props.postID, this.state.comments))

        }
    }

    toggleLike = e => {
        e.preventDefault();
        this.setState(prevState => ({
            liked: !prevState.liked
        }))

        if (!this.state.liked) {
            this.setState(prevState => ({
                likes: prevState.likes + 1
            }), () => {
                this.props.updateLikes(this.props.postID, this.state.likes)
                this.props.updateLiked(this.props.postID, this.state.liked)
            })
        } else {
            this.setState(prevState => ({
                likes: prevState.likes - 1
            }), () => {
                this.props.updateLikes(this.props.postID, this.state.likes)
                this.props.updateLiked(this.props.postID, this.state.liked)
            })
        }

    }

    render() {
        return (
            <div className="post-container">
                <Post 
                    posts={this.props.posts} 
                />
                <Feeback
                    likes={this.state.likes}
                    liked={this.state.liked}
                    toggleLike={this.toggleLike}
                    updateLikes={this.props.updateLikes}
                />
                <CommentSection 
                    comments={this.state.comments} 
                />
                <CommentInput
                    addNewComment={this.addNewComment}
                />
            </div>
        )
    }

}

PostContainer.propTypes = {
    posts: PropTypes.shape({
        thumbnailUrl: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                username: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            })
        )
    })
}

export default PostContainer;