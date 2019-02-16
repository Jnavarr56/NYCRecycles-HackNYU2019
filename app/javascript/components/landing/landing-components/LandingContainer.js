import React from 'react';
import axios from 'axios';
import PrimaryText from 'components/shared/PrimaryText';
import GoogleSuggest from '../../shared/route-search/GoogleSuggest';
import { parseAddressResponse, constructGeoclientParams } from '../../shared/route-search/addressHelpers';



const API_KEY = document.getElementById('go').getAttribute('data-src');

class LandingContainer extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {

        }
        this.handleRouteCollectionRequest = this.handleRouteCollectionRequest.bind(this);
    }

    componentDidMount() {



    }

    handleRouteCollectionRequest(searchConfig, method) {


        if (method === 'locationServices') {

            if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition((position) => {
                    
                    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${API_KEY}`)
                        .then(function (response) {

                            console.log(response);

                            if (parseAddressResponse(response.data.results)) {

                                /*
                                axios.post(`/collection-source/`)
                                    .then(function (response) {



                                    })
                                    .catch(function (error) {

         
                                    }); 

                                */
      
                            }

                            else {

                               alert('You aren\'t in New York right now!');

                            }

                    
                        })
                        .catch(function (error) {

                            console.log(error);
                            
                        });

                });
            
            } 

            else { 

                alert("Geolocation is not supported by this browser.");

            }

        }

        else {


                axios.post(`/collection-source`, constructGeoclientParams(searchConfig.searchConfig), 
                    {

                        headers: {

                            'X-CSRF-Token': document.getElementsByTagName("META")[1].content,
                            'Accept': 'application/json',

                        }

                    })
                    .then(function (response) {

                        console.log(response);

                    })
                    .catch(function (error) {

                        console.log(error);

                    }); 

        }

    }


    render() {

        return(

            <React.Fragment>
                <div className="container-fluid">
                    <div className={`row ${this.state.hasResults ? '' : 'push-up' }`}>
                        <PrimaryText 
                            includeIcon={{ exist: true, placement: 'before', fa: 'fas fa-recycle'}} 
                            otherClasses="" 
                            content=" NYCRecycles"
                            shouldAnimate={true}
                        />
                        <GoogleSuggest searchFromInput={this.handleRouteCollectionRequest} />
                    </div>
                    {this.state.hasResults ? <div className="row"></div> : ''}
                </div>
            </React.Fragment>

        );

    }

}

export default LandingContainer;

/*
<h1>Landing#index</h1>
<p>Find me in app/views/landing/index.html.erb</p>                
<a className="" href="/users/auth/google_oauth2">Sign in with Google</a>
*/                