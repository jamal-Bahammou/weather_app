import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DayWetherDetail from './content/DayWetherDetail';
import CitieCard from './content/CitieCard';

class CitieWetherDetail extends Component {
	renderList() {
		return this.props.list.map(day => {
			return (
				<DayWetherDetail key={day.dt} load={this.props.load} day={day} />
			);
		});
	}

	render() {
		const { load, city } = this.props;
		return (
			<div className='forecast open'>
				<button className='close-popup animated fadeIn delay-1s'>
					<Link to='/'>
						<i className='fas fa-times fa-2x' style={{ color: 'red' }} />
					</Link>
				</button>
				<div className='title animated fadeIn'>
					<h1 className='title__text' style={{ fontWeight: '500' }}>
						Current Weather
					</h1>
				</div>

				<CitieCard load={load} city={city} />
				<div className='title__text--subtitle animated fadeIn'>
					Forecast for the next 5 days
				</div>
				{this.renderList()}
			</div>
		);
	}
}

export default CitieWetherDetail;
