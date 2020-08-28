import React from "react"
import ReactDOM from "react-dom"
import _ from 'lodash'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/main.scss'

//Import Components
import SideMenu from './components/sideMenu'
import AboutMe from './components/aboutMe'
import Education from './components/education'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Container fluid>
                    <Row>
                        <Col md={2} lg={1}>
                            <SideMenu />
                        </Col>

                        <Col md={10} lg={11}>
                            {/* route to pages */}
                            <Switch>
                                <Route path="/aboutme" component={AboutMe} exact />
                                <Route path="/education" component={Education} />
                                {/* <Route path="/work" component={Work} />
                                <Route path="/skills" component={Skills} />
                                <Route path="/projects" component={Projects} /> */}
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));