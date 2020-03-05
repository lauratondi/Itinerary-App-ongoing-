import React, { Component } from 'react'
import Footer from './Footer';
import { connect } from 'react-redux'
import { fetchCityList } from '../store/actions/cityActions';
import { Link } from 'react-router-dom'


class Cities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // cities: [],
            cityFilter: ""
        }
    }

    componentDidMount() {
        this.props.fetchCityList()
    }

    handleChange = (e) => {
        this.setState({
            cityFilter: e.target.value
        })
    }

    // fecthCityList = () => {
    //     this.setState({ ...this.state, isFetching: true })
    //     fetch("http://localhost:5000/cities/all")
    //         .then(response => response.json())
    //         .then(result => this.setState({ cities: result, isFetching: false }))
    //         .catch(e => console.log(e))
    // }

    filterCities = () => {
        const { cities } = this.props;
        const { cityFilter } = this.state;
        return cities.filter((city) => {
            return city.name.toLowerCase().indexOf(cityFilter.toLowerCase()) !== -1 ||
                city.country.toLowerCase().indexOf(cityFilter.toLowerCase()) !== -1
        },
        )
    }


    render() {
        const { loading } = this.props;

        if (!loading)
            return (
                <div className="flex-container">

                    <div className="filter">
                        <label htmlFor="filter">Filter our current city</label>
                        <input type="text" id="filter"
                            value={this.state.cityFilter}
                            onChange={this.handleChange.bind(this)} />
                    </div>

                    <div className="city-list">
                        <ul>
                            {this.filterCities().map((city) => {
                                return (
                                    <li className="city" key={city._id}>
                                        <Link to={`/itineraries/${city.name}`}>
                                            <h2><center>{city.name} - {city.country} </center> </h2>
                                            <img src={city.img} alt="cityPhoto" />
                                        </Link>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    <Footer />
                </div>
            )
        else
            return (
                <div>Loading cities...</div>
            )
    }
}

const mapStateToProps = state => {
    return {
        initialState: state.initialState,
        cities: state.cities.cities,
        loading: state.cities.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCityList: () => dispatch(fetchCityList())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cities)