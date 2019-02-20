// React Imports
import React from 'react';
// CSS Imports
import './Comment.css';

class CommentInput extends React.Component {
    constructor() {
        super();
        this.state = {
            commentText: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            commentText: e.target.value
        })
    }

    submitComment = e => {
        this.setState({ commentText: '' });
        this.props.addNewComment(e, this.state.commentText);
    }

    render() {
        return (
            <div className="comment-input-container">
                <form onSubmit={this.submitComment}>
                    <input
                        className="comment-input"
                        type="text"
                        placeholder="Add a comment..."
                        value={this.state.commentText}
                        onChange={this.handleChange}
                    ></input>
                </form>
            </div>
        )
    };

}

export default CommentInput;