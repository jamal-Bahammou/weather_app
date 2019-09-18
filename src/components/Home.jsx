import React, { Component } from 'react';

import CurrentLocation from './content/CurrentLocation';
import OtherLocations from './content/OtherLocations';

class Home extends Component {
	render() {
		const { load, city } = this.props;
		return (
			<>
				<CurrentLocation load={load} city={city} />
				<OtherLocations />
			</>
		);
	}
}

export default Home;
