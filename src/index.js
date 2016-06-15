import React from 'react';
import ReactDOM from 'react-dom';

//Path reference to own files. Not needed for libraries.
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCzPG9rlPb_UdgU0BHK6H5S-lqS3mdtQas';

//Create new HTML creating component. App is top level, with child components within.
const App = () => {
	//JSX, subset of JS that looks like JS
	return ( 
		<div>
			<SearchBar />
		</div>
	);
}

// Insert new HTML component into DOM.
//Instantiate App, and second argument tells where to instantiate it
ReactDOM.render(<App />, document.querySelector('.container'));
