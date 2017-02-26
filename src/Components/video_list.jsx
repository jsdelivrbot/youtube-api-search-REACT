import React, {Component} from 'react';
import VideoListItem from './video_list_item';
const VideoList = (props) => {
    const videosItems = props.videos.map(function(video) {
        return <VideoListItem video={video} onVideoSelect={props.onVideoSelect}/>
    });
    return <ul className="col-md-4 list-group">{videosItems}</ul>

}
export default VideoList;
