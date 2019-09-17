import React from 'react';

import CurrentLocation from './content/CurrentLocation';
import OtherLocations from './content/OtherLocations';

const Home = () => {
	return (
		<>
			<CurrentLocation />
			<OtherLocations />
		</>
	);
};

export default Home;
