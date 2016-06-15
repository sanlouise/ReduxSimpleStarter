import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//Path reference to own files. Not needed for libraries.
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCzPG9rlPb_UdgU0BHK6H5S-lqS3mdtQas';


class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'puppies'}, function(data) {
		console.log(data);
		});
	}

	render () {
		return ( 
			<div>
				<SearchBar />
			</div>
		);
	}
}

// Insert new HTML component into DOM.
//Instantiate App, and second argument tells where to instantiate it
ReactDOM.render(<App />, document.querySelector('.container'));
