
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import homeIcon from '../images/homeIcon.png'


class Footer extends Component {
    render() {
        return (
            <div className="footerItem">
                <Link to="/">
                    <img src={homeIcon} alt="homeIcon" />
                </Link>
            </div>
        )
    }
}

export default Footer