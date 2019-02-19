import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function SearchBar(props) {
    console.log(props);
    return (
        <>
            <div className='search-container'>
                <div className='head-left'>
                    <img className='camera-logo' src='./assets/iglogo.png' alt='Camera Image' />
                    <div className='vert-line'></div>
                    <img className='insta-logo' src='./assets/iglogo.png' alt='Instagram Logo Image' />
                </div>

                <form>
                    Search: <input type='text' />
                </form>

                <div className='head-right'>
                    <img className='compass-logo' src='' />
                    <img className='heart-logo' src='' />
                    <img className='profile-logo' src='' />
                </div>
            </div>
        </>
    );
}

export default SearchBar;