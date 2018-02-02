import React from 'react';
import { connect } from 'react-redux';
import { getQuotes } from '../actions/quotesActions';
import { Quote } from '../components/Quote';

class QuotesList extends React.Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.dispatch(getQuotes());
    }

    render() {


        const { quotes } = this.props;
        
        if(quotes) {

            const randomQuotes = quotes.map((quote, idx) => {
                return (
                    <Quote key={idx} text={quote.content} author={quote.title}/>
                )
            });

            return (
                <div>
                    { randomQuotes }
                </div>
            )
        } else {
            return null;
        }
        
    }
}

export default connect(state => state.quotesReducer)(QuotesList);