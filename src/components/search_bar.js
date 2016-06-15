import React, { Component } from 'react';

//Defines new class and give it access to al components React has.
class SearchBar extends Component {
	//Render and returning JSX is necessary with React.Component
	render() {
		return <input />;
	}
}

//Functional component - output of a function. Cannot do much with
//user inout, unlike class components. This is less intelligent.
// const SearchBar = () => {
// 	return <input />;
// };

//Any file can now import and read SearchBar
export default SearchBar;