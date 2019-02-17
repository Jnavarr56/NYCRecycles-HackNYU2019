import React from 'react'
import NavItem from './NavItem'
import { Link } from 'react-router-dom'

class NavbarCircle extends React.Component {

    constructor(props) {
        super(props);    
        this.state = { close: true };

        this.handleClick = this.handleClick.bind(this);
    }

    getLogLink = isSignedIn => {

        if (isSignedIn) {

            return <a rel="nofollow" data-method="delete" href="/users/sign_out">Sign Out</a>

        }

        else {

            return <a className="" href="/users/auth/google_oauth2">Sign in with Google</a>;

        }

    }

    handleClick(e) {

        e.preventDefault();


        this.setState({
            close: this.state.close ? false : true 
        });

    }

    render () {

        return (
            <React.Fragment>
                <div className={`menu-toggle ${this.state.close ?  '' :  'menu-open'}`}>
                    <a href="" onClick={this.handleClick}className="menu-link">
                        <span className="menu-logo">
                            <i className="fas fa-user-circle"></i>
                        </span>
                        <span className="menu-icon">
                            <span className="menu-line menu-line-1"></span>
                            <span className="menu-line menu-line-2"></span>
                        </span>
                        <span className="menu-circle">
                            <span className="menu-pulse first-pulse"></span>
                            <span className="menu-pulse second-pulse"></span>
                        </span>
                    </a>
                    </div>
                    <div className={`menu-overlay ${this.state.close ?  '' :  'menu-open'}`}>
                        <div className="overlay-content">
                            <p>Menu Content</p>
                        </div>
                    </div>
            </React.Fragment>
        );

    }
    
}

export default NavbarCircle;