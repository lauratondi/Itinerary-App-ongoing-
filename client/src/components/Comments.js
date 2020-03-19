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
        let { itineraryId } = this.props
        // this.setState({ id })
        this.props.fetchComments(itineraryId)
        // itineraryId defined in Itinerary components line 73
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
                        <h3>Comments:</h3>
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
