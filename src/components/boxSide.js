import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/scss/boxSide.scss'
// import logo from '../assets/img/logo.png'

class BoxSide extends React.Component {
    render() {
        return (
            <Col md={12} className="box_side__inner">
                <div className="header">
                    <FontAwesomeIcon icon={faGlobe} />
                    <p>Social Media</p>
                </div>
            </Col>
        );
    }
}
export default BoxSide