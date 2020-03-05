import React, { Component } from 'react';
import Footer from './Footer';
import { connect } from 'react-redux'
import { fetchUser } from '../store/actions/userActions';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            firstName: '',
            lastName: '',
            country: '',
        }
    }

    // componentDidMount() {
    //     this.props.fetchUser()
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();

        this.props.fetchUser(this.state.email, this.state.password)
    }


    render() {
        return (
            <div className='form-container'>
                <h3><center>Create Account</center></h3>
                <form onSubmit={this.handleSubmit}>

                    <div className="photo">
                        <label htmlFor="photo">Add Photo</label>
                        <input type="img" id="photo" />
                    </div>

                    <div className="username">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" onChange={this.handleChange} />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="firstName">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>

                    <div className="lastName">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>

                    <div className="country">
                        <label> Country:</label>
                        <select id='country' onChange={this.handleChange}>
                            <option id="" selected disabled hidden>Choose...</option>
                            <option id='England'>England</option>
                            <option id='France'>France</option>
                            <option id='Germany'>Germany</option>
                            <option id='Holland'>Holland</option>
                            <option id='Ireland'>Ireland</option>
                            <option id='Spain'>Spain</option>
                            <option id='United States'>United States</option>
                        </select>

                    </div>

                    <div className='checkbox'>
                        <input id='isAgree' type='checkbox'
                            checked={this.state.isAgree} onChange={this.handleInputChange} />
                        <label>I agree to MYtinerary's Terms & Conditions.</label>
                    </div>

                    <center><button>OK</button></center>
                </form>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (email, password) => dispatch(fetchUser(email, password))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
