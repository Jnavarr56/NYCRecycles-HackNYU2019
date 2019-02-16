import React from 'react';
import axios from 'axios';

class Test extends React.Component {

    constructor(props) {
        
        super(props);

    }

    componentDidMount() {

        axios.defaults.headers.common['X-CSRF-Token'] = document.getElementsByTagName("META")[1].content;
        axios.defaults.headers.common['Accept'] = 'application/json';

        axios.get('/source/test')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    render() {

        return(

            <React.Fragment>
                <h1>Landing#index</h1>
                <p>Find me in app/views/landing/index.html.erb</p>
                <a className="" href="/users/auth/google_oauth2">Sign in with Google</a>
            </React.Fragment>

        );

    }

}

export default Test;