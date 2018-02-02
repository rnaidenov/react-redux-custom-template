import React from 'react';
import QuotesList from '../containers/QuotesList';
import '../../styles/style.scss';


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