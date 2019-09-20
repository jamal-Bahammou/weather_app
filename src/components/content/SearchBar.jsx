import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div onSubmit={this.onFormSubmit} className='search animated fadeIn'>
				<form action='#' className='search__form'>
					<input
						type='text'
						value={this.state.term}
						onChange={e => this.setState({ term: e.target.value })}
						name='search'
						className='search__form__input'
						placeholder='START TYPING HERE'
					/>
				</form>
			</div>
		);
	}
}

export default SearchBar;
