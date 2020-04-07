import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCommentPost } from '../store/actions/commentPostActions'

class CommentsPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',

        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { itineraryId } = this.props
        this.props.fetchCommentPost(itineraryId)
    }

    // componentDidMount() {
    //     let { itineraryId } = this.props
    //     this.props.fetchCommentPost(itineraryId)
    // }


    render() {
        const { user, isAuthenticated } = this.props
        if (isAuthenticated)
            return (
                <div className="commentForm-container">
                    <p>Hi {user.email}</p>
                    <textarea ype="text" id="comment" placeholder="Your comment" onChange={this.handleChange} ></textarea>

                    <button type="submit" onSubmit={this.handleSubmit}>></button>

                </div>
            )
        else
            return (
                <div>
                    <p>Please log in</p>
                </div>
            )

    }
}

const mapStateToProps = state => {
    return {
        commentsPost: state.commentsPost,
        user: state.login.user,
        isAuthenticated: state.login.isAuthenticated
    }
}

const mapDispatchProps = dispatch => {
    return {
        fetchCommentPost: (id) => dispatch(fetchCommentPost(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(CommentsPost);