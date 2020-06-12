import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  import '../App.css';

const NavComponent = (props) => {
    return(
        <div >
        <Navbar  className="row no-gutters " color="dark" dark expand="md" >
        <NavbarBrand className="col-sm-1" href="/">RUDRA </NavbarBrand>
          <div className="col-sm-11">

          <Nav className="row " navbar>
            <NavItem className="col-sm-2">
              <NavLink className="active" href="/components/">General Mode</NavLink>
            </NavItem >
            <NavItem className="col-sm-2">
              <NavLink >Autonomous Mode</NavLink>
            </NavItem >

            <NavItem className="col-sm-2">
              <NavLink >Alter Controls</NavLink>
            </NavItem >
            

            <NavItem className="col-sm-2">
              <NavLink >Pro Control Mode</NavLink>
            </NavItem >


            
      
             <NavItem className="col-sm-2">
                 <Input onChange={props.ip} type="text" name="email" id="exampleEmail" placeholder="Rover's IP : " value={props.currIP}/>
             </NavItem>
             <NavItem className="col-sm-2 ">
                 <Button onClick={props.connect} color="secondary">Connect to Rover</Button>
             </NavItem>
           
          </Nav>
          </div>
         
          {/* <NavbarText>Simple Text</NavbarText> */}
      </Navbar>
        </div>
    );
}

export default NavComponent;    