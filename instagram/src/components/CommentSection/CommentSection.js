import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function CommentSection(props) {
    console.log(props);
    return (
        <>
            {props.po}
        </>
    );
}

export default CommentSection;