// React Imports
import React from 'react';
// CSS Imports
import './PostContainer.css';
// Child Component Imports
import Post from '../Post/Post';

const PostContainer = props => {
    return (
        <div className='post-container'>
            {props.posts.map(post => <Post key={post.imageUrl} post={post} />)}
        </div>
    );
};

export default PostContainer;

//     addNewComment = (e, comment) => {
//         e.preventDefault();
//         if (comment.length > 0) {
//             const newComment = {
//                 username: "jdavis",
//                 text: comment
//             }
//             this.setState({
//                 comments: [...this.state.comments, newComment]
//             }, () => this.props.updateComments(this.props.postID, this.state.comments))

//         }
//     }

