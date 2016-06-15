import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//Path reference to own files. Not needed for libraries.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyCzPG9rlPb_UdgU0BHK6H5S-lqS3mdtQas';


class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'puppies'}, (videos) => {
			//Instead of this.setState({ videos: videos }); -- the value could be called anything.. this is syntactical sugar.
			//Works only when key and value pair have the same name.
			this.setState({ videos });
		});
	}

	render () {
		return ( 
			<div>
				<SearchBar />
				<VideoDetail video={this.state.videos[0]}/>
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

// Insert new HTML component into DOM.
//Instantiate App, and second argument tells where to instantiate it
ReactDOM.render(<App />, document.querySelector('.container'));
