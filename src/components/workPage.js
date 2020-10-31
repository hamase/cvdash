import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from '../assets/img/logo.png'
import axios from "axios";

export default class WorkPage extends React.Component {
	state = {
		titles: [],
	};

	componentDidMount() {
		axios
			.get("http://localhost:3004/work")
			.then((res) => res.data)
			.then((data) => {
				this.setState({ titles: data });
			});
	}

	render() {
		return (
			<Container fluid>
				<Row>
					<Col md={12} className="right_box">
						<div className="right_box_title">
							<h2>
								<FontAwesomeIcon icon={faBriefcase} />
							</h2>
							<h1>Work Experience</h1>
						</div>
						<Col className="info_box d-md-flex justify-content-center">
							<div className="info_box__inner d-md-flex align-content-start">
								{this.state.titles.length == 0
									? "Loading ..."
									: this.state.titles.map((title, i) => (
											<Col
												xs={12}
												sm={12}
												md={10}
												className="info_box--desc info_box--card">
												<h2>{title.woTitle}</h2>
												<h2>{title.woName}</h2>
												<h5>{title.woDuration}</h5>
												<h5>{title.woPlace}</h5>
												<h5>{title.woTasks}</h5>
												<h5>
													<b>Skills: </b>
													{title.woSkills}
												</h5>
												<h5>
													<b>Projects: </b>
													{title.woProjects}
												</h5>
											</Col>
									  ))}
							</div>
						</Col>
					</Col>
				</Row>
			</Container>
		);
	}
}
