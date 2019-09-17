import React, { Component } from 'react';

class CitieCard extends Component {
	render() {
		return (
			<div className='current noselect'>
				<div className='main__weather animated fadeIn'>
					<h2
						className='main__weather__city animated fadeIn'
						style={{ color: 'black' }}
					>
						Selouane, MA
					</h2>
					<div className='main__weather__details'>
						<img
							src='assets/weather/03d.svg'
							className='main__weather__details--icon animated fadeIn'
							alt='whether'
						/>
						<div className='main__weather__details--temp animated fadeIn'>
							27ºC
						</div>
					</div>
					<div className='main__weather__text'>
						<div className='main__weather__text--phrase animated fadeIn'>
							Clouds
						</div>
						<div className='main__weather__text--minmax animated fadeIn'>
							26ºC <span className='dot'>•</span> 27ºC
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CitieCard;
