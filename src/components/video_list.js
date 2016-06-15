import React from 'react';
import VideoListItem from './video_list_item'

//Props comes from index.html, <VideoList videos={this.state.videos}/> What is passed through, is called a 'prop'
//Video.etag is a unique identifier that comes with the Youtube API. All list elements need a unique ID.
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return  (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key ={video.etag} 
				video={video} />
		);
	});


	return (
		//className instead of class to avoid naming conflicts
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>

	);
};

export default VideoList;