import React, { Component } from 'react';

class CitieCard extends Component {
	render() {
		const { load, city } = this.props;

		return (
			<>
				{load && (
					<div className='main__weather animated fadeIn'>
						<div className='loader'>
							<div className='one'></div>
							<div className='two'></div>
						</div>
					</div>
				)}
				{!load && (
					<div className='main__weather animated fadeIn'>
						<h2
							className='main__weather__city animated fadeIn'
							style={{ color: 'black' }}
						>
							{city.name}, {city.sys.country}
						</h2>
						<div className='main__weather__details'>
							<img
								src={`assets/weather/${city.weather[0].icon}.svg`}
								className='main__weather__details--icon animated fadeIn'
								alt='whether'
							/>
							<div className='main__weather__details--temp animated fadeIn'>
								{Math.floor(city.main.temp)}ºC
							</div>
						</div>
						<div className='main__weather__text'>
							<div className='main__weather__text--phrase animated fadeIn'>
								{city.weather[0].main}
							</div>
							<div className='main__weather__text--minmax animated fadeIn'>
								{Math.floor(city.main.temp_min)}ºC
								<span className='dot'>•</span>
								{Math.floor(city.main.temp_max)}ºC
							</div>
						</div>
					</div>
				)}
			</>
		);
	}
}

export default CitieCard;
