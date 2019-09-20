import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import CitieWeatherDetail from './CitieWeatherDetail';
import AddCitieWeather from './AddCitieWeather';
import { fetchCity, fetchList } from '../actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load: true,
			lat: null,
			lon: null,
			CURRENT_LOCATION: null,
			OTHER_LOCATION: [],
			selected_city: null,
			errMessage: ''
		};
	}

	componentDidMount() {
		var promise = fetch(
			window.navigator.geolocation.getCurrentPosition(
				position =>
					this.setState({
						lat: position.coords.latitude,
						lon: position.coords.longitude
					}),
				err => this.setState({ errMessage: err.message })
			)
		);

		promise
			.then(() => this.props.fetchCity(this.state.lat, this.state.lon))
			.then(() =>
				this.setState({
					load: false,
					CURRENT_LOCATION: this.props.city,
					selected_city: this.props.city
				})
			)
			.catch(() => console.log(this.state.errMessage));
	}

	// FUNCTION TO START THE API
	startFunctionAPI(city) {
		var promise = fetch(
			window.navigator.geolocation.getCurrentPosition(
				position =>
					this.setState({
						lat: position.coords.latitude,
						lon: position.coords.longitude
					}),
				err => this.setState({ errMessage: err.message })
			)
		);

		promise
			.then(() => this.props.fetchCity(city.lat, city.lon))
			.then(() =>
				this.setState({
					load: false,
					OTHER_LOCATION: [...this.state.OTHER_LOCATION, this.props.city],
					selected_city: city
				})
			)
			.catch(() => console.log(this.state.errMessage));
	}

	// GET THE GEO OF THE NEW CITY TO ADD
	getGeolocation(city) {
		this.startFunctionAPI(city);
	}

	// GET THE SELECTED CITY
	getSelectedCity(city) {
		this.setState({
			load: false,
			selected_city: city
		});
	}

	render() {
		return (
			<>
				<Route
					exact
					path='/'
					component={() => (
						<Home
							load={this.state.load}
							CURRENT_LOCATION={this.state.CURRENT_LOCATION}
							OTHER_LOCATION={this.state.OTHER_LOCATION}
							getSelectedCity={this.getSelectedCity.bind(this)}
						/>
					)}
				/>
				<Route
					path='/detail'
					component={() => (
						<CitieWeatherDetail
							load={this.state.load}
							city={this.state.selected_city}
						/>
					)}
				/>
				<Route
					path='/add'
					component={() => (
						<AddCitieWeather
							getGeolocation={this.getGeolocation.bind(this)}
						/>
					)}
				/>
			</>
		);
	}
}

const mapStateToProps = state => {
	return { city: state.city, list: state.list };
};

export default connect(
	mapStateToProps,
	{ fetchCity, fetchList }
)(App);
