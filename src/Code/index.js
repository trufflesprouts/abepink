import React from "react";
import styled from "styled-components";

const isPlaying = (video) =>
	!!(
		video.currentTime > 0 &&
		!video.paused &&
		!video.ended &&
		video.readyState > 2
	);

export default () => {
	const karma = React.useRef(null);
	const caramella = React.useRef(null);
	const raft = React.useRef(null);
	const rockets = React.useRef(null);
	const loft = React.useRef(null);
	const bullet = React.useRef(null);
	const piano = React.useRef(null);
	const pathfinder = React.useRef(null);
	return (
		<Style>
			<ul>
				<p>
					<b>karma trade </b>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://karmatrade.shop/"
					>
						(website)
					</a>
				</p>
				<video
					autoPlay
					loop
					muted
					playsInline
					ref={karma}
					onClick={() => {
						if (isPlaying(karma.current)) karma.current.pause();
						else karma.current.play();
					}}
				>
					<source src="/static/karma.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<p>
					working on developing an online cloth swapping platform, complete with
					a virtual currency, and a fully- fledged e-commerce platform set to
					launch in fall 2020.
				</p>
				<p>
					utilized: Javascript, React, Node, Git, Firebase, Web Payments
					(Square), Figma, Adobe Illustrator.
				</p>
				<p className="margin-top">
					<b>caramella </b>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://caramel.la/"
					>
						(website)
					</a>
				</p>
				<video
					autoPlay
					loop
					muted
					playsInline
					ref={caramella}
					onClick={() => {
						if (isPlaying(caramella.current)) caramella.current.pause();
						else caramella.current.play();
					}}
				>
					<source src="/static/caramella.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<p>
					worked in a product team of three to design and develop a website
					maker from scratch, using a full javascript stack. my responsibilities
					included working in the front-end and back-end of new features and
					supporting ongoing infrastructure maintenance.
				</p>
				<p>
					utilized: Javascript, AWS, MongoDB, Jest, GraphQL, TypeScript, SVG
					animations, DNS.
				</p>
				<p className="margin-top">
					<b>tamerny </b>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://drive.google.com/drive/folders/1F9KkALPDbdjRDnrEnj2IGeCTQauZu6FX?usp=sharing"
					>
						(gallery)
					</a>
				</p>
				<img src="/static/tamerny.jpg" alt="" />
				<p>
					designed and built the front-end for operators to accept and fulfill
					orders from users, based on apis developed by the team.
				</p>
				<p className="margin-top">
					<b>raft </b>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://drive.google.com/file/d/1OdMYo7fLljPrVzP3qzvlEJr52XwIW9e5/view?usp=sharing"
					>
						(video)
					</a>
				</p>
				<video
					autoPlay
					loop
					muted
					playsInline
					ref={raft}
					onClick={() => {
						if (isPlaying(raft.current)) raft.current.pause();
						else raft.current.play();
					}}
				>
					<source src="/static/raft.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<p>
					e-commerce platform built using reat-native for social merchants to
					simplify the purchasing process with simple and intuitive shopping
					experiences.
				</p>
				<p className="margin-top">
					<h2 style={{ color: "blue" }}>random projects:</h2>
				</p>
				<p className="margin-top">
					<b>rocket launches </b>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://rockets.surge.sh/"
					>
						(website)
					</a>
				</p>
				<video
					autoPlay
					loop
					muted
					playsInline
					ref={rockets}
					onClick={() => {
						if (isPlaying(rockets.current)) rockets.current.pause();
						else rockets.current.play();
					}}
				>
					<source src="/static/rockets.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<p>
					web app displaying upcoming rocket launches around the world, based on
					the launch library api. supports pwa features and acts like a native
					app on android.
				</p>
				<p className="margin-top">
					<b>pathfinder </b>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://truffles-pathfinder.surge.sh/"
					>
						(website)
					</a>
				</p>
				<video
					autoPlay
					loop
					muted
					playsInline
					ref={pathfinder}
					onClick={() => {
						if (isPlaying(pathfinder.current)) pathfinder.current.pause();
						else pathfinder.current.play();
					}}
				>
					<source src="/static/pathfinder.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<p>
					breadth-first Javascript pathfinding algorithm with visualization.
				</p>
				<p className="margin-top">
					<b>the loft </b>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://truffles-the-loft.surge.sh/"
					>
						(website)
					</a>
				</p>
				<video
					autoPlay
					loop
					muted
					playsInline
					ref={loft}
					onClick={() => {
						if (isPlaying(loft.current)) loft.current.pause();
						else loft.current.play();
					}}
				>
					<source src="/static/loft.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<p className="margin-top">
					<b>piano app </b>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.youtube.com/watch?v=VkWgVwtP1rk"
					>
						(video)
					</a>
				</p>
				<video
					autoPlay
					loop
					muted
					playsInline
					ref={piano}
					onClick={() => {
						if (isPlaying(piano.current)) piano.current.pause();
						else piano.current.play();
					}}
				>
					<source src="/static/piano.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<p className="margin-top">
					<b>bullet design </b>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://truffles-bullet-design.surge.sh/"
					>
						(website)
					</a>
				</p>
				<video
					autoPlay
					loop
					muted
					playsInline
					ref={bullet}
					onClick={() => {
						if (isPlaying(bullet.current)) bullet.current.pause();
						else bullet.current.play();
					}}
				>
					<source src="/static/bullet.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://catch-app.surge.sh/"
					>
						seafood market
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://mockstagram.surge.sh/"
					>
						mockstagram
					</a>
				</li>
				{/* <li>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://morning-island-23195.herokuapp.com"
				>
					secretly
				</a>
			</li> */}
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://milkdesign.herokuapp.com/"
					>
						milk design
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://truffles-tictacto.surge.sh/"
					>
						tic-tac-to
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://truffles-compass.surge.sh/"
					>
						mobile compass
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://truffles-wiki-search.surge.sh/"
					>
						wikipedia search
					</a>
				</li>
			</ul>
		</Style>
	);
};

const Style = styled.div`
	video,
	img {
		width: 100%;
		max-width: 640px;
		margin: 0.2em 0;
		padding: 0;
	}
	img,
	video {
		box-shadow: 0 0.5px 0 2px #efefef;
	}
	p {
		max-width: 640px;
	}
	.margin-top {
		margin-top: 1em;
	}
`;
