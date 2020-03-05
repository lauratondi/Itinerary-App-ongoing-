import React, { Component } from 'react'

class CityCard extends Component {
    render() {

        return (
            <div className="cityCard" >
                <h3 className="shadow p-3 mb-5 bg-white rounded">{this.props.city}</h3>
            </div>
        )


    }
}




export default CityCard;
