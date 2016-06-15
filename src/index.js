import React from 'react';
import ReactDOM from 'react-dom';

//Create new HTML creating component.
const App = () => {
	//JSX, subset of JS that looks like JS
	return <div>Hi!</div>;
}

// Insert new HTML component into DOM.
//Instantiate App, and second argument tells where to instantiate it
ReactDOM.render(<App />, document.querySelector('.container'));
