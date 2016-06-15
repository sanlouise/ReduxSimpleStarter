import React from 'react';

const VideoList = (props) => {

	return (
		//className instead of class to avoid naming conflicts
		<ul className="col-md-4 list-group">
		{props.videos.length}
		</ul>

	);
};

export default VideoList;