import React from 'react';

const DayWetherDetail = () => {
	return (
		<div className='days'>
			<div className='cities__weather animated fadeIn noselect'>
				<div className='cities__weather__name animated fadeIn'>
					Monday, 16th September, 18:00
				</div>
				<div className='cities__weather__details'>
					<img
						src='/assets/weather/02d.svg'
						alt='wether'
						className='cities__weather__details--icon animated fadeIn'
					/>
					<div className='cities__weather__details__text'>
						<div className='cities__weather__details__text--phrase animated fadeIn'>
							Clouds
						</div>
						<div className='cities__weather__details__text--minmax animated fadeIn'>
							23ºC <span className='dot'>•</span> 26ºC
						</div>
					</div>
					<div className='cities__weather__details__temp animated fadeIn'>
						26ºC
					</div>
				</div>
			</div>
		</div>
	);
};

export default DayWetherDetail;
