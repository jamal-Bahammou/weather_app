import React from 'react';
import { Link } from 'react-router-dom';
import DayWetherDetail from './content/DayWetherDetail';
import CitieCard from './content/CitieCard';

const CitieWetherDetail = () => {
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

			<CitieCard />
			<div className='title__text--subtitle animated fadeIn'>
				Forecast for the next 5 days
			</div>
			<DayWetherDetail />
			<DayWetherDetail />
			<DayWetherDetail />
		</div>
	);
};

export default CitieWetherDetail;
