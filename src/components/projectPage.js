import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap'
import { BiLink } from "react-icons/bi"
import 'bootstrap/dist/css/bootstrap.min.css'
// import logo from '../assets/img/logo.png'
import axios from 'axios'


export default class ProjectPage extends React.Component {
    state = {
        titles: []
    }
    
    componentDidMount() {
        // const about_url = API.ABOUT_URL;
        axios.get('http://localhost:3004/project')
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
                        <div className="right_box_title"><h2><FontAwesomeIcon icon={faFileCode} /></h2><h1>Projects</h1></div>
                        <Col className="info_box d-flex">
                            <div className="info_box__inner">
                                {
                                    this.state.titles.length == 0
                                        ? 'Loading ...'
                                        : this.state.titles.map((title, i) => (
                                            <Col xs={12} md={6} className="info_box--desc info_box--card">
                                                <h2>{title.prjName}<a href={title.prjHref} target="_blank"><BiLink /></a></h2>
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
