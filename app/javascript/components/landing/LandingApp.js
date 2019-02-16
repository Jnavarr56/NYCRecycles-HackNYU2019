import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Test from './landing-components/Test';

class LandingApp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <Switch>
                <Route exact path="/" render={() => <Test {...this.props} testLoc={"root"} /> } />
                <Route exact path="/about" render={() => <Test {...this.props} testLoc={"about"} />} />
            </Switch>

        );

    }

}

export default LandingApp;

