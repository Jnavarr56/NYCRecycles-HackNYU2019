import React from 'react';



class TableRow extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {}

    }


    

    render() {

        const weekdays = ['M', 'T', 'W', 'TH', 'F', 'S'];


        return(
            
            <tr>
                { weekdays.map((w, x) => {

                    for (let y = 0; y < this.props.actionInfo.value.length; y++) {

                        if (w === this.props.actionInfo.value[y]) {

                            return <td key={`${new Date().getTime() + w + y}`}><i className={this.props.actionInfo.icon}></i></td>;

                        }

                    }

                    return <td key={`${new Date().getTime() + w}`}></td>

                })}
            </tr>

        );

    }

}

export default TableRow;

