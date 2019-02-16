import React from 'react';

class ConfirmationOption extends React.Component {
    
    constructor(props) {

        super(props);

    }



    render() {

        

        return(

            <h1 className="confirmation-option" onClick={()=> this.props.optionSelection(this.props.optionData)}>{this.props.optionData.formatted_address}</h1>

        );

    }


}

export default ConfirmationOption;