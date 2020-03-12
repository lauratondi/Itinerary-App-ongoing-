import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../store/actions/commentActions'


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itineraries: ''
        }
    }

    componentDidMount() {
        let id = window.location.pathname.split('/')[1]
        this.setState({ id })
        this.props.fetchComments(id)
    }

    render() {
        const { comments } = this.props
        console.log(comments)

        const commentsList = comments.map(comment => {

            return (
                <div className="commentBox" key={comment._id}>

                    <div className="comment">
                        {comment.userId} - {comment.text}
                    </div>

                </div>
            )

        })

        const { loading } = this.props;

        if (!loading)
            return (
                <div className="flex-container">

                    <div className="comments-list">
                        <h2>Comments:</h2>
                        {commentsList}
                    </div>

                </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments.comments
    }
}

const mapDispatchProps = dispatch => {
    return {
        fetchComments: (id) => dispatch(fetchComments(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(Comments);
