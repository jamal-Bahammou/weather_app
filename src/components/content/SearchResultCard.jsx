import React, { Component } from 'react';

class SearchResultCard extends Component {
	render() {
		const { city, load } = this.props;
		return (
			<>
				{!load && (
					<div className='search__results__single animated fadeIn'>
						<div className='search__results__single--country animated fadeIn'>
							{city.c}
						</div>
						<div className='search__results__single--city animated fadeIn'>
							{city.name}
						</div>
					</div>
				)}
			</>
		);
	}
}

export default SearchResultCard;
