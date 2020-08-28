import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/scss/aboutMe.scss'
// import logo from '../assets/img/logo.png'

//Import Components
import BoxSide from './boxSide'

class AboutMe extends React.Component {
    render() {
        return (
            <Container fluid className="about_box">
                <Row>
                    <Col md={8} lg={9} className="about_box__content">
                        dsff
                    </Col>
                    <Col md={4} lg={3} className="box_side">
                        <BoxSide />
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default AboutMe