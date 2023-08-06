import React from "react";

function article_1() {
	return {
		date: "May 2023 - Aug 2023",
		title: "Software Engineering Intern, Sports Excitement",
		description:
			"Coordinated with 10 developers to create a MERN web app for career and education, attracting 1,000 pre-launch users. Integrated MongoDB API, improved deployment with React CI/CD pipeline, and enhanced security with standardized JWT token authentication for 1,000+ user profiles",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "May 2023 - Aug 2023",
		title: "Online Programming Instructor, ID Tech Camps",
		description:
			"Instructed diverse programming languages and Machine Learning for UPENN high school programs. Achieved 98% accuracy in handwriting recognition and conducted user study with 90% satisfaction rate.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "May 2022 - Aug 2022",
		title: "Web Development Intern, DePauw University",
		description:
			"Built MERN app, improving Chemistry students' test scores by 45%. Enhanced load time by 40% with code splitting. Designed high-performance RESTful API for 10,000+ requests/sec. Achieved 99.9% uptime for MongoDB database.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;
