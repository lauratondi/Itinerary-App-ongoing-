
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MYtinerayLogo from '../images/MYtineraryLogo.png'
import arrowIcon from '../images/arrowIcon.png'
import homeIcon from '../images/homeIcon.png'

class Landing extends Component {
    state = {
        cities: []
    }
    render() {
        return (
            <div className="flex-container">

                <div className="headerItem">
                    <img src={MYtinerayLogo} alt="headerImage" />
                </div>

                <div className="infoItem">
                    <p>Find your perfect trip, designed by insiders
                    who know and love their cities.</p>
                </div>

                <div className="nextItem">
                    <h2>Start browsing</h2>
                    <Link to="/cities">
                        <img src={arrowIcon} alt="arrowIcon" />
                    </Link>
                </div>

                <div className="buildItem">
                    <p>Want you build your own MYtinerary?</p>
                </div>
                <div className="linksItem">
                    <Link to="/login"><p>Log In</p></Link>
                    <Link to="/user"><p>Create an account</p></Link>
                </div>



                <div className="footerItem">
                    <img src={homeIcon} alt="homeIcon" />
                </div>

            </div>
        )
    }
}

export default Landing;