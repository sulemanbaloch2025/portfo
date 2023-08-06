import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience & Education"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Sports Excitement</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">New York City, NY, USA</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">ID Tech Camps</div>
							<div className="work-subtitle">
							Online Programming Instructor
							</div>
							<div className="work-duration">Remote</div>
						</div>
						<div className="work">
							<img
								src="./depauw.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">DePauw University</div>
							<div className="work-subtitle">
						     	Bachelors in Computer Science
							</div>
							<div className="work-duration">Greencastle, IN, USA</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
