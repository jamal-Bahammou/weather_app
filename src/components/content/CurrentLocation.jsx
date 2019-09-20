import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CitieCard from './CitieCard';

class CurrentLocation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load: null,
			OTHER_LOCATION: [],
			selected_city: null,
			selected_list: null
		};
	}

	render() {
		const { load, CURRENT_LOCATION } = this.props;
		return (
			<div className='current noselect'>
				<div className='title animated fadeIn'>
					<i className='fas fa-map-marker-alt fa-2x fa-fw' />
					<h1 className='title__text'>Current Location</h1>
				</div>

				<Link
					to='/detail'
					style={{ textDecoration: 'none' }}
					onClick={() => {
						this.props.getSelectedCity(CURRENT_LOCATION);
					}}
				>
					<CitieCard load={load} city={CURRENT_LOCATION} />
				</Link>
			</div>
		);
	}
}

export default CurrentLocation;
