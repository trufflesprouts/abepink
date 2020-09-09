import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default () => {
	return (
		<Style>
			<p>
				<Link to="/words/node-user-login-with-aws-face-recognition">Node User Login With AWS’ Face Recognition</Link>
			</p>
			<p>
				<Link to="/words/kirby-dev-setup">The Perfect Kirby Development Setup</Link>
			</p>
			<p>[more words soon, hopefully]</p>
		</Style>
	);
};

const Style = styled.ul`
	p {
		max-width: 640px;
		margin-bottom: 0.5em;
	}
`;
