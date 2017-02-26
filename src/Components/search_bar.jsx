import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }
    render() {
        return (
            <div className="search-bar">
                <input onChange= {event => this.sayHelloChange(event)}/>
            </div>
        )
    }
    sayHelloChange(event) {
        this.props.videoSearch(event.target.value);
    }
}
export default SearchBar; // onChange={this.onInputChange}
