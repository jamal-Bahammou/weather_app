import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import CitieWeatherDetail from './CitieWeatherDetail';
import AddCitieWeather from './AddCitieWeather';

class App extends Component {
	render() {
		return (
			<>
				<Route exact path='/' component={Home} />
				<Route path='/detail' component={CitieWeatherDetail} />
				<Route path='/add' component={AddCitieWeather} />
			</>
		);
	}
}

export default App;
