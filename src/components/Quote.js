import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, author }) => {

    return (
        <div>
            <div className='quoteWrapper'>
                <p>{text}</p>
                <p>- {author}</p>
            </div>
        </div>
    )
}

export { Quote };