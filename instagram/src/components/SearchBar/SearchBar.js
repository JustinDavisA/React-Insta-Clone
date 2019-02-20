// React Imports
import React from 'react';
// CSS Imports
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchText: ''
        }
    }

    handleSearchTextChange = e => {
        this.setState({
            searchText: e.target.value
        }, () => { this.props.searchDidUpdate(e, this.state.searchText) })
    }

    render() {
        return (
            <form
                className="search-bar-container"
            >
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search.."
                    value={this.state.searchText}
                    onChange={this.handleSearchChange}
                ></input>
            </form>
        )
    }
}

export default SearchBar;