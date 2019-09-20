import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';

import SearchBar from './content/SearchBar';
import RapidAPI from '../api/RapidAPI';
import SearchResultCard from './content/SearchResultCard';

class AddCitieWeather extends Component {
	constructor(props) {
		super(props);
		this.state = { citys: [], load: true };
	}

	onSearchSubmit = async term => {
		const response = await RapidAPI.get(
			`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${term}`,
			{
				params: { query: term },
				method: 'GET',
				headers: {
					'x-rapidapi-host':
						'devru-latitude-longitude-find-v1.p.rapidapi.com',
					'x-rapidapi-key':
						'62d6b2363cmsh3a4bb3ff8e1454ep1091f1jsn0c21545a0c7a'
				}
			}
		);

		this.setState({ citys: response.data.Results, load: false });
	};

	renderList() {
		return this.state.citys.map(city => {
			return (
				<Link
					key={uuid()}
					to='/'
					style={{ textDecoration: 'none' }}
					onClick={() => {
						this.props.getGeolocation(city);
					}}
				>
					<SearchResultCard city={city} load={this.state.load} />
				</Link>
			);
		});
	}

	render() {
		return (
			<div className='add-city open'>
				<button className='close-popup animated fadeIn delay-1s'>
					<Link to='/'>
						<i className='fas fa-times fa-2x' style={{ color: 'red' }} />
					</Link>
				</button>
				<div className='title animated fadeIn'>
					<i
						className='fas fa-map-marked-alt fa-2x fa-fw'
						style={{ marginRight: '5px' }}
					/>
					<h1 className='title__text' style={{ fontWeight: '500' }}>
						Add New Locations
					</h1>
				</div>
				<div className='title__text--subtitle animated fadeIn'>
					Find a city and tap on it to add
				</div>

				{/* SEARCH BAR */}
				<SearchBar onSubmit={this.onSearchSubmit} />

				{/* SEARCH RESULT */}
				<div className='search__results'>{this.renderList()}</div>
			</div>
		);
	}
}

export default AddCitieWeather;
