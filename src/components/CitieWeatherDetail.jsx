import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import DayWetherDetail from './content/DayWetherDetail';
import CitieCard from './content/CitieCard';
import { fetchList } from '../actions';

class CitieWetherDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load: null,
			OTHER_LOCATION: []
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
			.then(() =>
				this.props.fetchList(
					this.props.selected_city.coord.lat,
					this.props.selected_city.coord.lon
				)
			)
			.then(() =>
				this.setState({
					load: false,
					CURRENT_LOCATION: this.props.city,
					list: this.props.list
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

	renderList() {
		return this.props.list.map(day => {
			return (
				<DayWetherDetail key={uuid()} load={this.props.load} day={day} />
			);
		});
	}

	render() {
		const { load, selected_city } = this.props;
		return (
			<div className='forecast open'>
				<button className='close-popup animated fadeIn delay-1s'>
					<Link to='/'>
						<i
							className='fas fa-times fa-2x'
							style={{ color: '#ff5959' }}
						/>
					</Link>
				</button>
				<div className='title animated fadeIn'>
					<h1 className='title__text' style={{ fontWeight: '500' }}>
						Weather Detail
					</h1>
				</div>

				{!(this.props.CURRENT_LOCATION === selected_city) && (
					<button
						onClick={() => this.props.deleteIndCity(selected_city)}
						className='remove animated fadeIn delay-1s'
					>
						<Link
							to='/'
							style={{ textDecoration: 'none', color: 'white' }}
						>
							Remove from Saved
						</Link>
					</button>
				)}

				<div className='current noselect'>
					<CitieCard load={load} city={selected_city} />
				</div>

				<div className='title__text--subtitle animated fadeIn'>
					Forecast for the next 5 days
				</div>
				{/* {load && (
					<div className='main__weather animated fadeIn'>
						<div className='loader'>
							<div className='one'></div>
							<div className='two'></div>
						</div>
					</div>
				)} */}
				{this.renderList()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { list: state.list };
};

export default connect(
	mapStateToProps,
	{ fetchList }
)(CitieWetherDetail);
