import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './Components/search_bar.jsx'
import VideoList from './Components/video_list.jsx'
import VideoDetail from './Components/video_detail.jsx'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyC_8x5tiMpIg5IZDRF0-ubXtHTDHseQKx0';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('ukraine');
    }
    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            console.log(term);
            this.setState({videos: videos});
            this.setState({selectedVideo: videos[0]})
        });
    }
    render() {
        const videoSearch = _.debounce(term => this.videoSearch(term), 500);
        return (
            <div>
                <SearchBar videoSearch={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect= {selectedVideo => this.setState({selectedVideo})}/>
            </div>
        )
    }
}

ReactDom.render(
    <App/>, document.querySelector('.container'));
