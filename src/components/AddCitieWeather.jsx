import React from 'react';
import { Link } from 'react-router-dom';

const AddCitieWeather = () => {
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
			<div className='search animated fadeIn'>
				<form action='#' className='search__form'>
					<input
						type='text'
						name='search'
						className='search__form__input'
						placeholder='Start typing here'
					/>
				</form>
			</div>
			<div className='search__results'>{/* RESULT OF SEARCH HERE */}</div>
		</div>
	);
};

export default AddCitieWeather;
