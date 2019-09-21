import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import CitieWeatherDetail from './CitieWeatherDetail';
import AddCitieWeather from './AddCitieWeather';
import { fetchCity } from '../actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load: true,
			lat: null,
			lon: null,
			CURRENT_LOCATION: null,
			OTHER_LOCATION: [],
			selected_city: { coord: { lon: -2.93, lat: 35.17 } },
			errMessage: ''
		};
	}

	// FUNCTION TO RUN WENT THE COMPONENT START ------------------------------------------
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

		// LOCAL STORAGE SETUP
		// Test if localStorage is null
		if (localStorage.getItem('OTHER_LOCATION') === null) {
			// Set to localStorage
			localStorage.setItem(
				'OTHER_LOCATION',
				JSON.stringify(this.state.OTHER_LOCATION)
			);
		} else {
			// Get bookmarks from localStorage
			this.setState({
				OTHER_LOCATION: JSON.parse(localStorage.getItem('OTHER_LOCATION'))
			});
		}
	}

	// FUNCTION TO START THE API ---------------------------------------------------------
	startFunctionCityAPI(city) {
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
			.then(() => {
				this.setState({
					load: false,
					OTHER_LOCATION: [...this.state.OTHER_LOCATION, this.props.city],
					selected_city: city
				});
				localStorage.setItem(
					'OTHER_LOCATION',
					JSON.stringify(this.state.OTHER_LOCATION)
				);
			})
			.catch(() => console.log(this.state.errMessage));
	}

	// ️☀️️☀️️ ADD CITY TO OTHER LOCATION GET THE GEO OF THE NEW CITY TO ADD ---------------
	getGeolocation(city) {
		this.startFunctionCityAPI(city);
	}

	// ☀️☀️️ GET THE SELECTED CITY -------------------------------------------------------
	getSelectedCity(city) {
		this.setState({
			load: false,
			selected_city: city
		});
	}

	// 🛑🛑 DELETE TEH LIST OF CITYS -----------------------------------------------------
	deleteAllLocations() {
		this.setState({
			OTHER_LOCATION: []
		});
		localStorage.setItem('OTHER_LOCATION', JSON.stringify([]));
	}

	// 🛑🛑 DELETE A CITY FROM LIST OF CITYS ---------------------------------------------
	deleteIndCity(city) {
		this.setState({
			OTHER_LOCATION: this.state.OTHER_LOCATION.filter(
				location => location !== city
			)
		});
		localStorage.setItem(
			'OTHER_LOCATION',
			JSON.stringify(
				this.state.OTHER_LOCATION.filter(location => location !== city)
			)
		);
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
							deleteAllLocations={this.deleteAllLocations.bind(this)}
						/>
					)}
				/>
				<Route
					path='/detail'
					component={() => (
						<CitieWeatherDetail
							load={this.state.load}
							selected_city={this.state.selected_city}
							CURRENT_LOCATION={this.state.CURRENT_LOCATION}
							deleteAllLocations={this.deleteAllLocations.bind(this)}
							deleteIndCity={this.deleteIndCity.bind(this)}
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
	return { city: state.city };
};

export default connect(
	mapStateToProps,
	{ fetchCity }
)(App);
