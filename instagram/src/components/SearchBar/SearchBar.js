import React from 'react';
import IGLogo from '../../assets/iglogo.png'
import CameraLogo from '../../assets/camera.svg'
import HeartLogo from '../../assets/heart.svg'
import CompassLogo from '../../assets/compass.png'
import UserLogo from '../../assets/user.png'
import './SearchBar.css'

class SearchBar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            searchText: ''
        }
    }

    handleSearchChange = e => {
        this.setState({ searchText: e.target.value },
        () => {this.props.filterSearch(e, this.state.searchText)})
    }

    render() {
    return (
        <div className='head-container'>
            <div className='head-left'>
                <img 
                    height='50' 
                    className='camera-logo' 
                    src={CameraLogo} 
                    alt='Camera Image' 
                />
                <div className='vert-line'></div>
                <img
                    height='50' 
                    className='ig-logo' 
                    src={IGLogo} 
                    alt='Instagram Logo Image' 
                />
            </div>
 
            <form className='search'>
                <input 
                    className="search-bar" 
                    type="text" 
                    placeholder="Search.."
                    value={this.state.searchText}
                    onChange={this.handleSearchChange}>
                </input>
            </form>

            <div className='head-right'>
                <img 
                    height='50' 
                    className='compass-logo' 
                    src={CompassLogo} 
                    alt='Compass Image'
                />
                <img 
                    height='50' 
                    className='heart-logo' 
                    src={HeartLogo} 
                    alt='Heart Image' 
                />
                <img 
                    height='50' 
                    className='profile-logo' 
                    src={UserLogo} alt='Profile Image' 
                />
            </div>
        </div>
        )
    }
}

export default SearchBar;