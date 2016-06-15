import React, { Component } from 'react';

//Defines new class and give it access to al components React has.
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}

	//Render and returning JSX is necessary with React.Component
	render() {
		return (

			<div className="search-bar">
				<input 
				value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>

		);
	}

	onInputChange(term) {

		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;