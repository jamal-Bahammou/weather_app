import React, { Component } from 'react';

class AddCitieCard extends Component {
	render() {
		const { load, city } = this.props;

		return (
			<>
				{load && (
					<div className='cities__weather__name animated fadeIn'>
						<div className='loader'>
							<div className='one'></div>
							<div className='two'></div>
						</div>
					</div>
				)}
				{!load && (
					<>
						<div className='cities__weather__name animated fadeIn'>
							{city.name}, {city.sys.country}
						</div>
						<div className='cities__weather__details'>
							<img
								src={`assets/weather/${city.weather[0].icon}.svg`}
								className='cities__weather__details--icon animated fadeIn'
								alt='whether'
							/>
							<div className='cities__weather__details__text'>
								<div className='cities__weather__details__text--phrase animated fadeIn'>
									{city.weather[0].main}
								</div>
								<div className='cities__weather__details__text--minmax animated fadeIn'>
									{Math.floor(city.main.temp_min)}ºC
									<span className='dot'>•</span>
									{Math.floor(city.main.temp_max)}ºC
								</div>
							</div>
							<div className='cities__weather__details__temp animated fadeIn'>
								{Math.floor(city.main.temp)}ºC
							</div>
						</div>
					</>
				)}
			</>
		);
	}
}

export default AddCitieCard;
