import React, { Component } from 'react';

import CurrentLocation from './content/CurrentLocation';
import OtherLocations from './content/OtherLocations';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			load: null,
			OTHER_LOCATION: [],
			selected_city: null,
			selected_list: null
		};
	}
	render() {
		const { load, CURRENT_LOCATION, OTHER_LOCATION } = this.props;
		return (
			<>
				<CurrentLocation
					load={load}
					CURRENT_LOCATION={CURRENT_LOCATION}
					getSelectedCity={this.props.getSelectedCity.bind(this)}
				/>
				<OtherLocations
					load={load}
					OTHER_LOCATION={OTHER_LOCATION}
					getSelectedCity={this.props.getSelectedCity.bind(this)}
					deleteAllLocations={this.props.deleteAllLocations.bind(this)}
				/>
			</>
		);
	}
}

export default Home;
