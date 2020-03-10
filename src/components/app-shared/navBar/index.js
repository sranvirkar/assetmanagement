import React, {Component} from 'react';
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { MoreVert } from '../../../helpers/svgicons';
import { withRouter } from 'react-router-dom';

class TopNavbar extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.location);
  }

  render() {

    const { location } = this.props;

    return (
      <div className="navbar-wrapper">
        <Navbar expand="lg">
          <Navbar.Brand href="#home">Asset Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          { 
            location && location.pathname !== "/" &&
            <Navbar.Collapse>
                <Nav className="ml-auto">                  
                    <NavDropdown title="action">                        
                        <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
          }          
          </Navbar>
      </div>
    );
  }  
}

export default withRouter(TopNavbar);