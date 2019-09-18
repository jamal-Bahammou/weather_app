import React, { Component } from 'react';
import moment from 'moment';

class DayWetherDetail extends Component {
	render() {
		const { load, day } = this.props;

		var options = {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric'
		};
		return (
			<>
				{!load && (
					<div className='days'>
						<div className='cities__weather animated fadeIn noselect'>
							<div className='cities__weather__name animated fadeIn'>
								{moment(day.dt_txt)
									.toDate()
									.toLocaleDateString('en-US', options)}
							</div>
							<div className='cities__weather__details'>
								<img
									src={`/assets/weather/${day.weather[0].icon}.svg`}
									alt='wether'
									className='cities__weather__details--icon animated fadeIn'
								/>
								<div className='cities__weather__details__text'>
									<div className='cities__weather__details__text--phrase animated fadeIn'>
										{day.weather[0].main}
									</div>
									<div className='cities__weather__details__text--minmax animated fadeIn'>
										{Math.floor(day.main.temp_min)}ºC{' '}
										<span className='dot'>•</span>{' '}
										{Math.floor(day.main.temp_max)}ºC
									</div>
								</div>
								<div className='cities__weather__details__temp animated fadeIn'>
									{Math.floor(day.main.temp)}ºC
								</div>
							</div>
						</div>
					</div>
				)}
			</>
		);
	}
}

export default DayWetherDetail;
