import React from 'react';

class PrimaryText extends React.Component {

    constructor(props) {

        super(props);

    }

    getSpans = (str) => {


        str.sp


    }

    render() {

        return(

            <h1 className={`primary-text ${this.props.otherClasses}`}>
                {this.props.includeIcon.exist && this.props.includeIcon.placement === 'before' ? <i className={this.props.includeIcon.fa}></i> : ''}
                {this.props.shouldAnimate ? this.props.content.split('').map((x, i) => <span style={{ animationDelay: `${i * .10}s` }} key={`PTS${i}`}>{x}</span>) : this.props.content}
                {this.props.includeIcon.exist && this.props.includeIcon.placement === 'after' ? <i className={this.props.includeIcon.fa}></i> : ''}
            </h1>   

        );

    }

}

export default PrimaryText;