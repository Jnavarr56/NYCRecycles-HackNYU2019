import React from 'react';

class ConfirmationOption extends React.Component {
    
    constructor(props) {

        super(props);

        this.state = {
            clickSonar: { x: null, y: null }
        };

        this.handleClick = this.handleClick.bind(this);

    }

    componentDidUpdate() {

        if (this.state.clickSonar.x) {

            setTimeout(() =>  this.props.optionSelection(this.props.optionData), 500);
            
        }

    }

    handleClick(e) {


        console.log('REGISTERING CLICK');

        const rect = e.currentTarget.getBoundingClientRect();

        const newClickSonarCoords = {
            clickSonar: {
                x: `${((e.clientX - rect.left) / e.currentTarget.offsetWidth) * 100}%`,
                y: `${((e.clientY - rect.top) / e.currentTarget.offsetHeight) * 100}%`
            }
        };

        this.setState(newClickSonarCoords);
         
    }




    render() {



        return(

            <button className="confirmation-option btn" onClick={this.handleClick}>

                <span className="confirmation-btn-text">{this.props.optionData.formatted_address}</span>

                {this.state.clickSonar.x ? <div className="click-sonar-confirmation" style={{ left: this.state.clickSonar.x, top: this.state.clickSonar.y}}></div> : '' }

            </button>

        );

        
    }


}

export default ConfirmationOption;