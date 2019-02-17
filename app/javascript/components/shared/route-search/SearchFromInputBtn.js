import React from 'react';

class SearchFromInputBtn extends React.Component {
    
    constructor(props) {

        super(props);

        this.state = {
            clickSonar: { x: null, y: null }
        };

        this.handleClick = this.handleClick.bind(this);

    }

    componentDidUpdate() {

        if (this.state.clickSonar.x) {

            setTimeout(() =>  this.props.searchFromInput(this.props.firstParam, this.props.secondParam), 500);

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

            <button 
                    disabled={this.props.shouldDisable} 
                    onClick={this.handleClick} 
                    className={this.props.classConfig} 
                    type="button">
            
                <span className="btn-search-text">Go</span>

                {this.state.clickSonar.x ? <div className="click-sonar-location" style={{ left: this.state.clickSonar.x, top: this.state.clickSonar.y}}></div> : '' }
            
            </button>


        );

        
    }


}

export default SearchFromInputBtn;

