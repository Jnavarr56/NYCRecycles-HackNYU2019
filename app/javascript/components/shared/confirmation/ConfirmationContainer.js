import React from 'react';
import ConfirmationOption from './ConfirmationOption';

class ConfirmationContainer extends React.Component {

    constructor(props) {

        super(props);

    }


    render() {


            return(

                
                <div className="confirmation-options fade-in">

                    <h1>Which one of these best describes your location?</h1>   
                    {this.props.geolocationData.results.map((x, i) => <ConfirmationOption optionSelection={this.props.optionSelection} key={`CONFOP${i}`} optionData={x} />)}
                    
                
                </div>


            );


    }

}

export default ConfirmationContainer;