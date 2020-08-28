import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/scss/boxSide.scss'
// import logo from '../assets/img/logo.png'
import axios from 'axios';

import API from '../api';

class BoxSide extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <Col md={12} className="box_side__inner" >
                <div className="header">
                    <FontAwesomeIcon icon={faGlobe} />
                    {
                        this.state.persons.map(person => <p>{person.name}</p>)
                    }
                </div>
            </Col>
        );
    }
}
export default BoxSide