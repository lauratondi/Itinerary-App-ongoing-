import React, { Component } from 'react'
import { connect } from 'react-redux';
import { logout } from '../store/actions/logoutActions';

class Logout extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: '',
    //     }
    // }

    handleClick = (e) => {
        e.preventDefault();
        this.props.logout();
    }



    render() {
        // const { user } = this.props;
        return (
            <div>
                <button onClick={this.handleClick} href="#">Logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logout: state.logout
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout);