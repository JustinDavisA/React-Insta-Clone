// React Imports
import React from 'react';
// CSS Imports
import './SearchBar.css'
// Image Imports
import CameraLogo from '../../assets/camera.svg';
import IGLogo from '../../assets/iglogo.png';
import CompassLogo from '../../assets/compass.png';
import HeartLogo from '../../assets/heart.svg';
import UserLogo from '../../assets/user.png';

const SearchBar = props => {
    return (
        <header>
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

            <form>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search.."
                    onChange={props.searchUpdateHandler}
                ></input>
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
        </header>

    )
}

export default SearchBar;