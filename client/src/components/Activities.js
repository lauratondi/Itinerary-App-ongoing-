import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import userIcon from '../images/userIcon.png'
// import { Link } from 'react-router-dom';
import { CardBody, Card } from 'reactstrap';


class Activities extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {

        const { activities } = this.props
        // activities is a props(and not state) because it's passed
        // from the itineraries component (line 62)

        console.log(activities)


        return (
            <div className="activities" >

                {activities.map((activity) =>

                    <Card bsclass='custom-card' key={activity._id}>
                        <CardBody> {activity.title} </CardBody>
                    </Card>
                )}
            </div>
        )

    }


}


export default Activities