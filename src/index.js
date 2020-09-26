import React from "react"
import ReactDOM from "react-dom"
import _ from 'lodash'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/index.scss'
import './assets/scss/infoBox.scss'


//Import Components
import LeftMenu from './components/leftMenu'
import InfoPage from './components/infoPage'
import EducationPage from './components/educationPage'
import WorkPage from './components/workPage'
import SkillPage from './components/skillPage'
import ProjectPage from './components/projectPage'


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Container fluid>
                    <Row>
                        <Col md={2} lg={2} xl={1}>
                            <LeftMenu />
                        </Col>
                        <Col md={10} lg={10} xl={11}>
                            {/* route to pages */}
                            <Switch>
                                <Route path="/" component={InfoPage} exact />
                                <Route path="/education" component={EducationPage} />
                                <Route path="/work" component={WorkPage} />
                                <Route path="/skills" component={SkillPage} />
                                <Route path="/projects" component={ProjectPage} />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));