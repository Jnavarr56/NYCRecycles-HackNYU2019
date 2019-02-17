import React from 'react';
import axios from 'axios';
import PrimaryText from 'components/shared/PrimaryText';
import GoogleSuggest from '../../shared/route-search/GoogleSuggest';
import { parseAddressResponse, constructGeoclientParams } from '../../shared/route-search/addressHelpers';
import { resultsDeDupe } from '../../shared/array-dedupe/arrayDeDupe';
import ConfirmationContainer from '../../shared/confirmation/ConfirmationContainer';
import LandingRouteInfo from './LandingRouteInfo';
import { formatSanitationData } from '../../shared/breackCamelCase/breakCamelCase';



const API_KEY = document.getElementById('go').getAttribute('data-src');

class LandingContainer extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {
            loadingStatus: 'none'
        }
        this.handleRouteCollectionRequest = this.handleRouteCollectionRequest.bind(this);
        this.handleOptionSelection = this.handleOptionSelection.bind(this);
    }

    componentDidUpdate() {

        const self = this;

        if (this.state.loadingStatus === 'fetching' && this.state.fetchActions &&  this.state.fetchActions.method === 'locationServices' && !this.state.fetchActions.confirmed) {

            if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition((position) => {
                    
                    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${API_KEY}`)
                        .then(function (response) {

                            if (parseAddressResponse(response.data.results)) {

                                response.data.results = resultsDeDupe(response.data.results);


                                self.setState({
                                            
                                    loadingStatus: 'confirmation',
                                    fetchActions: {
                                        method: 'locationServices',
                                        data: response.data 
                                    }

                                });

                                    
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

        else  if (this.state.loadingStatus === 'fetching' && this.state.fetchActions &&  this.state.fetchActions.method === 'search'){


                axios.post(`/collection-source`, constructGeoclientParams(this.state.fetchActions.searchConfig.searchConfig), 
                    {

                        headers: {

                            'X-CSRF-Token': document.getElementsByTagName("META")[1].content,
                            'Accept': 'application/json',

                        }

                    })
                    .then(function (response) {

                        setTimeout(()=> {

                            self.setState({
                                
                                loadingStatus: 'retrieved',
                                fetchActions: {
                                    method: 'search',
                                    data: formatSanitationData(response.data)
                                }

                            });


                        }, 500);
                        

                    })
                    .catch(function (error) {

                        console.log(error);

                        alert('Sorry, there was an issue. Please try again later.');

                    }); 

        }

        else if (this.state.loadingStatus === 'fetching' && this.state.fetchActions &&  this.state.fetchActions.method === 'locationServices' && this.state.fetchActions.confirmed) {

            axios.post(`/collection-source`, constructGeoclientParams(this.state.fetchActions.data), 
                    {

                        headers: {

                            'X-CSRF-Token': document.getElementsByTagName("META")[1].content,
                            'Accept': 'application/json',

                        }

                    })
                    .then(function (response) {

                        console.log(formatSanitationData(response.data));

                        setTimeout(()=> {


                            self.setState({
                                
                                loadingStatus: 'retrieved',
                                fetchActions: {
                                    method: 'locationServices',
                                    data: formatSanitationData(response.data)
                                }

                            });


                        }, 500);
                        

                    })
                    .catch(function (error) {

                        console.log(error);

                        alert('Sorry, there was an issue. Please try again later.');

                    }); 


        }

        

    }

    handleRouteCollectionRequest(searchConfig, method) {

        const stateCopy = {...this.state};

        stateCopy.loadingStatus = 'fetching';
        stateCopy.fetchActions = {
            searchConfig: searchConfig,
            method: method
        };

        this.setState(stateCopy);

    }
    
    handleOptionSelection(option) {

        console.log(option);
        
        this.setState({

            loadingStatus: 'fetching',
            fetchActions: {
            
                data: option,
                method: 'locationServices',
                confirmed: true
            }
            
        });
        
    }


    render() {

        console.log(this.state);

        return(

            <React.Fragment>
                <div className={`container-fluid ${this.state.loadingStatus === 'fetching' || this.state.loadingStatus === 'retrieved' ? 'fade-in' : ''}`}>
                    <div className="row">
                        {this.state.loadingStatus === 'none' ? <PrimaryText includeIcon={{ exist: true, placement: 'before', fa: 'fas fa-recycle'}} otherClasses="" content=" NYCRecycles" shouldAnimate={!this.state.hasOccuredOnce ? true : false } loadingStatus={this.state.loadingStatus}/> : '' }
                        {this.state.loadingStatus === 'none' ? <GoogleSuggest searchFromInput={this.handleRouteCollectionRequest} /> : '' }

                        {this.state.loadingStatus === 'fetching' ? <div className="spinner-border route-loading-spinner" role="status"><span className="sr-only">Loading...</span></div> : '' }

                        {this.state.loadingStatus === 'confirmation' ? <ConfirmationContainer optionSelection={this.handleOptionSelection} geolocationData={this.state.fetchActions.data} /> : '' }

                        {this.state.loadingStatus === 'retrieved' ? <LandingRouteInfo routeInfo={this.state} />  : '' }
                    </div>
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





                                axios.post(`/collection-source`, constructGeoclientParams(response.data), 
                                    {

                                        headers: {

                                            'X-CSRF-Token': document.getElementsByTagName("META")[1].content,
                                            'Accept': 'application/json',

                                        }

                                    })
                                    .then(function (response) {

                                        console.log(response);

                                
                                        self.setState({
                                            
                                            loadingStatus: 'retrieved',
                                            fetchActions: {
                                                method: 'locationServices',
                                                data: response.data 
                                            }

                                        });


                                    })
                                    .catch(function (error) {

                                        alert('Sorry, there was an issue. Please try again later.');

                                    }); 

*/                




