import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import logo from '../assets/img/logo.png'
import axios from 'axios'


export default class EducationPage extends React.Component {
    state = {
        titles: []
    }
    
    componentDidMount() {
        axios.get('http://localhost:3004/education')
            .then(res => res.data)
            .then((data) => {
                this.setState({ titles: data })
            })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={12} className="right_box">
                        <div className="right_box_title"><h2><FontAwesomeIcon icon={faSchool} /></h2><h1>Education</h1></div>
                        <Col className="info_box d-flex justify-content-center">
                            <div className="info_box__inner">
                                {
                                    this.state.titles.length == 0
                                        ? 'Loading ...'
                                        : this.state.titles.map((title, i) => (
                                            <Col xs={12} md={6} className="info_box--desc info_box--card">
                                                <h2>{title.eduTitle}</h2>
                                                <h2>{title.eduName}</h2>
                                                <h5>{title.eduDuration}</h5>
                                                <h5>{title.eduPlace}</h5>
                                            </Col>
                                        ))
                                }
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}
