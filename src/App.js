import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Home from "./Home";
import Code from "./Code";
import Photo from "./Photo";
import About from "./About";
import Words from "./Words";
import AWS from "./Words/AWS";
import Kirby from "./Words/Kirby";

export default () => {
	React.useEffect(() => {
		const heapId =
			process.env.NODE_ENV !== "production" ? "1037283999" : "878117143";
		if (window.heap) {
			window.heap.load(heapId);
		}
	}, []);
	return (
		<Router>
			<Style>
				<ul className="navigation placeholder">
					<li>abe baali</li>
				</ul>
				<ul className="navigation">
					<div className="top">
						<li>
							<Link to="/">abe baali</Link>
						</li>
						<li>
							<Link to="/code">code</Link>
						</li>
						<li>
							<Link to="/photo">photo</Link>
						</li>
						<li>
							<Link to="/words" className="words">
								words
							</Link>
						</li>
					</div>
					<div className="bottom">
						<li>
							<Link to="/about">about</Link>
						</li>
					</div>
				</ul>
				<div className="content">
					<Switch>
						<Route path="/words/node-user-login-with-aws-face-recognition" component={AWS}></Route>
						<Route path="/words/kirby-dev-setup" component={Kirby}></Route>
						<Route path="/words" component={Words}></Route>
						<Route path="/code" component={Code}></Route>
						<Route path="/photo" component={Photo}></Route>
						<Route path="/about" component={About}></Route>
						<Route path="/" component={Home}></Route>
					</Switch>
				</div>
			</Style>
		</Router>
	);
};

const Style = styled.div`
	display: flex;
	min-height: 100vh;
	width: 100vw;
	.placeholder {
		opacity: 0;
		visibility: hidden;
		user-select: none;
		pointer-events: none;
		padding: 1em;
	}
	.navigation {
		display: flex;
		z-index: 3;
		flex-direction: column;
		flex: none;
		a {
			text-decoration: none;
			:hover {
				color: #ff3d00;
			}
		}
		.top {
			position: fixed;
			left: 1em;
			top: 1em;
		}
		.bottom {
			position: fixed;
			left: 1em;
			bottom: 1em;
		}
		/* .words {
			pointer-events: none;
			text-decoration: line-through;
			opacity: 0.5;
		} */
	}
	.content {
		flex: auto;
		padding: 1em;
		overflow: auto;
	}
`;
