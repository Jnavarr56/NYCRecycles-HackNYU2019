import React from 'react'
import NavItem from './NavItem'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { constructGeoclientParams } from '../route-search/addressHelpers';





class SideNav extends React.Component {

    constructor(props) {
        super(props);    
        this.state = { closed: true };
        this.handleClickMenu = this.handleClickMenu.bind(this);
        this.handleClickLink = this.handleClickLink.bind(this);
        this.getLogLink = this.getLogLink.bind(this);
    }

    getLogLink(isSignedIn) {

        if (isSignedIn) {

            return <a onClick={this.handleClickLink} rel="nofollow" id='session-link' data-method="delete" href="/users/sign_out">Sign Out</a>

        }

        else {

            return <a onClick={this.handleClickLink}  className="" id='session-link' href="/users/auth/google_oauth2">Sign in with Google</a>;

        }

    }



    handleClickMenu(e) {

      e.preventDefault(); 

      this.setState({ closed: this.state.closed ? false : true });

    }

    handleClickLink(e) {

      console.log(e);

      const path = e.nativeEvent.target.href;

        setTimeout(()=> {

          window.location.href = path;
          
        }, 600);

    }


    render () {

        return (
            <React.Fragment>
              <div onClick={this.handleClickMenu} className={`desktop-nav landing-fade-in ${!this.state.closed ? 'desktop-is-active' : ''}`}>
              <a href="#" id="desktop-nav-trigger" onClick={this.handleClickMenu} className={`desktop-nav-trigger ${!this.state.closed ? 'desktop-is-active' : ''}`}>
                <div id="desktop-bars" className="desktop-bars"></div>
              </a>
                <div className= {`desktop-nav-content ${!this.state.closed ? 'desktop-is-active' : ''}`}>
                  <nav className="desktop-nav-list">
                    <ul>
                      
                      <li className="desktop-nav-item"><a onClick={this.handleClickLink} href="/">Get my Garbage/Recycling Route</a></li>
                      <li className="desktop-nav-item"><a onClick={this.handleClickLink} href="/can-i">Can I Recycle This?</a></li>
                      <li className="desktop-nav-item">{this.getLogLink(this.props.sessionStatus)}</li>

                    </ul>
                  </nav>
              </div>    
            </div>
            <div style={{display: 'none'}}>
            <li className="desktop-nav-item"><Link id="root-link" to="/">Home/Get my Recyling Route</Link></li>
            <li className="desktop-nav-item"><Link id="can-i-link" to="/can-i">Can I Recycle This?</Link></li>
            <li className="desktop-nav-item"></li>
            </div>
          </React.Fragment>
        );

    }
    
}

export default SideNav;