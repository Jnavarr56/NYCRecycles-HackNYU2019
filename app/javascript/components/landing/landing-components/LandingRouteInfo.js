import React from 'react';
import moment from 'moment-timezone';
import TableRow from '../../shared/route-table/TableRow';


class LandingRouteInfo extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {}
    }

    render() {


        return(
            
            <div className="collection-schedule-container fade-in">
                <div className="table-legend">
                    <div className="table-district-info">
                        <h5>{`NYC Sanitation Section/Subsection: ${this.props.routeInfo.fetchActions.data.stats.sanitationCollectionSchedulingSectionAndSubsection.value} | Sanitation District: ${this.props.routeInfo.fetchActions.data.stats.sanitationDistrict.value}`}</h5>
                    </div>
                    <div className="table-legend-header">
                        <h3>{`${this.props.routeInfo.fetchActions.data.address.replace(', USA', '')} as of ${moment().tz(moment.tz.guess()).format('lll')}`}</h3>
                    </div>
                    <div className="table-legend-legend">
                        <span>Recycling <i className="fas fa-recycle"></i></span>
                        <span>Organic Waste <i className="fas fa-carrot"></i></span>
                        <span>Organic Waste <i className="far fa-trash-alt"></i></span>
                    </div>
                </div>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">M</th>
                            <th scope="col">T</th>
                            <th scope="col">W</th>
                            <th scope="col">Th</th>
                            <th scope="col">F</th>
                            <th scope="col">Sa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.routeInfo.fetchActions.data.schedules.map((a, i) => <TableRow key={`ROW${i}`} actionInfo={a} />)}
                    </tbody>
                </table>
            </div>

        );

    }

}

export default LandingRouteInfo;

