import React from 'react';
import PropTypes from 'prop-types';

class Quotes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { text, author } = this.props;

        return (
            <div>
                <div>
                    <p>{text}</p>
                    <p>- { author}</p>
                </div>
            </div>
        )
    }
}

Quotes.prototypes = {
    text: PropTypes.string,
    author: PropTypes.string
}

export { Quote };