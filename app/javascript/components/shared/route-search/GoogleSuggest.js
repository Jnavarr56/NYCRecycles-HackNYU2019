import PropTypes from "prop-types"
import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGooglePlacesSuggest from "react-google-places-suggest"
import { parseAddressResponse } from './addressHelpers';
import GuessLocationBtn from './GuessLocationBtn';
import SearchFromInputBtn from './SearchFromInputBtn';

const API_KEY = document.getElementById('go').getAttribute('data-src');
 	
class GoogleSuggest extends React.Component {
  state = {
    search: '',
    value: '',
    selected: false
  }

  handleInputChange(e) {;

    this.setState({search: e.target.value, value: e.target.value, selected: false})

  }

  handleSelectSuggest(suggest) {

    if (parseAddressResponse([suggest])) {

        this.setState({search: '', value: suggest.formatted_address, selected: true, searchConfig: suggest})

    }

    else {

        alert('Must be a valid New York City address.');

        this.setState({search: '', value: '', selected: false});

    }

  }

  handleClickAnim() {

  }

  render() {
    const {search, value} = this.state;
    
    return (

      <ReactGoogleMapLoader
        params={{
          key: API_KEY,
          libraries: 'places,geocode',
        }}
        render={googleMaps =>
          googleMaps && (
              <ReactGooglePlacesSuggest
                autocompletionRequest={
                    {
                        input: search,
                        componentRestrictions: { country: 'us' },
                        types: ['address'],
                        location: new google.maps.LatLng(40.7128, -74.0060),
                        radius: 48280.3,
                        bounds: new google.maps.LatLngBounds(
                            new google.maps.LatLng(40.4774, -74.2589), 
                            new google.maps.LatLng( 40.9176, -73.7004)
                        )

                    }
                }

                googleMaps={googleMaps}
                onSelectSuggest={this.handleSelectSuggest.bind(this)}
              >
                <div className="input-group">
                    <input
                    type="text"
                    value={value}
                    className="form-control selected-input"
                    placeholder="Your Address"
                    onChange={this.handleInputChange.bind(this)}
                    aria-describedby="button-addon4"
                    />
                    <div className="input-group-append" id="button-addon4">
                        <GuessLocationBtn searchFromInput={this.props.searchFromInput} firstParam={this.state} secondParam={'locationServices'} />
                        <SearchFromInputBtn 
                          shouldDisable={this.state.selected ? false : true} 
                          searchFromInput={this.props.searchFromInput}  
                          firstParam={this.state} 
                          secondParam={'search'}
                          classConfig={`btn btn-search-bar ${this.state.selected ? 'now-able' : '' }`}  />
                    </div>
                </div>
              </ReactGooglePlacesSuggest>
          )
        }
      />
    )
  }
}

GoogleSuggest.propTypes = {
  googleMaps: PropTypes.object,
}

export default GoogleSuggest;

{/*<input id="route-search" htype="text" className="form-control" placeholder="Your Address" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4" />
<button disabled={this.state.selected ? false : true} onClick={() => this.props.searchFromInput(this.state, 'search')} className={`btn btn-search-bar ${this.state.selected ? 'now-able' : '' }`} type="button"><span className="btn-search-text">Go</span></button>
*/}