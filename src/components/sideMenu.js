

import React from "react"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSchool, faBriefcase, faTools, faFileCode } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/scss/sideMenu.scss'
import logo from '../assets/img/logo.png'

//Import Components

class SideMenu extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" variant="dark" className="side_nav">
                <Navbar.Brand><img src={logo} className="side_nav__logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="side_nav__collapse">
                    <Nav className="mr-auto side_nav__items">
                        <NavLink to="/aboutme"><FontAwesomeIcon icon={faUser} /></NavLink>
                        <NavLink to="/education"><FontAwesomeIcon icon={faSchool} /></NavLink>
                        <NavLink to="/work"><FontAwesomeIcon icon={faBriefcase} /></NavLink>
                        <NavLink to="/skills"><FontAwesomeIcon icon={faTools} /></NavLink>
                        <NavLink to="/projects"><FontAwesomeIcon icon={faFileCode} /></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default SideMenu