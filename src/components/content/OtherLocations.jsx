import React from 'react';
import { Link } from 'react-router-dom';

const OtherLocations = () => {
	return (
		<div className='other'>
			<div className='title animated fadeIn'>
				<i
					className='fas fa-map-marked-alt fa-2x fa-fw'
					style={{ marginRight: '5px' }}
				/>
				<h1 className='title__text'>Other Locations</h1>
			</div>
			<div className='cities'>
				<div className='error__message'>
					You have no saved cities. Click the button above to add them!
				</div>
			</div>
			<button className='add__city animated fadeIn'>
				<Link to='/add' style={{ color: 'gray' }}>
					<i className='fas fa-plus fa-2x'></i>
				</Link>
			</button>
		</div>
	);
};

export default OtherLocations;
