import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AddCitieCard from './AddCitieCard';

class OtherLocations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load: null,
			OTHER_LOCATION: [],
			selected_city: null
		};
	}

	componentDidMount() {
		this.setState({
			OTHER_LOCATION: this.props.OTHER_LOCATION
		});
	}

	renderList() {
		return this.state.OTHER_LOCATION.map(city => {
			return (
				<Link
					key={city.id}
					to='/detail'
					style={{ textDecoration: 'none' }}
					onClick={() => {
						this.props.getSelectedCity(city);
					}}
				>
					<div className='cities__weather animated fadeIn noselect'>
						<AddCitieCard load={this.props.load} city={city} />
					</div>
				</Link>
			);
		});
	}

	render() {
		return (
			<div className='other'>
				<div className='title animated fadeIn'>
					<i
						className='fas fa-map-marked-alt fa-2x fa-fw'
						style={{ marginRight: '5px' }}
					/>
					<h1 className='title__text'>Other Locations</h1>
				</div>

				{/* LIST OF THE OTHER LOCATION  */}
				<div className='cities'>{this.renderList()}</div>

				{this.props.OTHER_LOCATION.length < 1 ? (
					<div className='cities'>
						<div className='error__message'>
							You have no saved cities. Click the button above to add
							them!
						</div>
					</div>
				) : (
					<button
						onClick={() => this.props.deleteAllLocations()}
						className='remove remove__all animated fadeIn delay-1s'
					>
						Remove all Locations
					</button>
				)}

				<button className='add__city animated fadeIn'>
					<Link to='/add' style={{ color: 'gray' }}>
						<i className='fas fa-plus fa-2x'></i>
					</Link>
				</button>
			</div>
		);
	}
}

export default OtherLocations;
