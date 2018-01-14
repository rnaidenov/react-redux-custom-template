import React from 'react';
import { connect } from 'react-redux';
import { getQuotes } from '../actions/quotesActions';


class QuotesList extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.dispatch(getQuotes());
    }

    render() {

        const { quote } = this.props.quotesReducer;
        console.log(quote);

        if(quote) {
            return (
                <div>
                    <p id="content"> {quote.text} </p>
                    <p id="author"> {quote.author} </p>
                </div>
            )
        } else {
            return null;
        }
        
    }
}

export default connect(state => state)(QuotesList);