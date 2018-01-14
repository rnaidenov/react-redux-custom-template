import React from 'react';
import QuotesList from '../containers/QuotesList';


class App extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        return( 
            <QuotesList/>
        )
    }
};

export { App };