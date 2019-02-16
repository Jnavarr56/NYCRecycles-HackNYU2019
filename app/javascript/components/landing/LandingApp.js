import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LandingContainer from './landing-components/LandingContainer';

class LandingApp extends React.Component {

    constructor(props) {

        super(props);
        
    }

    render() {

        return (

            <Switch>
                <Route exact path="/" render={() => <LandingContainer {...this.props} /> } />
            </Switch>

        );

    }

}

export default LandingApp;

