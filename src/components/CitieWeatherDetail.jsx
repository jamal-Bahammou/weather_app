import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';

import DayWetherDetail from './content/DayWetherDetail';
import CitieCard from './content/CitieCard';

class CitieWetherDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load: null,
			OTHER_LOCATION: []
		};
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
						<i className='fas fa-times fa-2x' style={{ color: 'red' }} />
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
				{this.renderList()}
			</div>
		);
	}
}

export default CitieWetherDetail;
