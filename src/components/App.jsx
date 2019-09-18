import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import CitieWeatherDetail from './CitieWeatherDetail';
import AddCitieWeather from './AddCitieWeather';
import { fetchCity, fetchList } from '../actions';

// Finishing the UI

class App extends Component {
	state = { load: true, lat: null, lon: null, errMessage: '' };
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
			.then(() => this.props.fetchList(this.state.lat, this.state.lon))
			.then(() => this.setState({ load: false }))
			.catch(() => console.log(this.state.errMessage));
	}
	render() {
		return (
			<>
				<Route
					exact
					path='/'
					component={() => (
						<Home load={this.state.load} city={this.props.city} />
					)}
				/>
				<Route
					path='/detail'
					component={() => (
						<CitieWeatherDetail
							load={this.state.load}
							city={this.props.city}
							list={this.props.list}
						/>
					)}
				/>
				<Route path='/add' component={AddCitieWeather} />
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
