import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCommentPost } from '../store/actions/commenPostActions'

class CommentsPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.prevent.default();

    }

    componentDidMount() {
        let { itineraryId } = this.props
        this.props.fetchCommentPost(itineraryId)
    }


    render() {

        return (
            <div className="commentForm-container">
                <textarea ype="text" id="comment" placeholder="Your comment" onChange={this.handleChange} ></textarea>

                <button type="submit" onSubmit={this.handleSubmit}>></button>

            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        commentsPost: state.commentsPost
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