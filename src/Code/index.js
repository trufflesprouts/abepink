import React from "react";
import styled from "styled-components";

const isPlaying = video =>
	!!(
		video.currentTime > 0 &&
		!video.paused &&
		!video.ended &&
		video.readyState > 2
	);

export default () => {
	const caramella = React.useRef(null);
	const raft = React.useRef(null);
	return (
		<Style>
			<ul>
				<p>
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
					e-commerce platform built using reat-native for social merchants to simplify the purchasing
					process with simple and intuitive shopping experiences.
				</p>
				<p className="margin-top">
					<b>random projects</b>
				</p>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.youtube.com/watch?v=VkWgVwtP1rk"
					>
						piano app
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://truffles-the-loft.surge.sh/"
					>
						the loft
					</a>
				</li>
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
						href="https://truffles-bullet-design.surge.sh/"
					>
						bullet design
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
						href="https://truffles-pathfinder.surge.sh/"
					>
						pathfinder
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
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://rockets.surge.sh/"
					>
						rocket launches
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
		max-width: 360px;
		margin: 0.2em 0;
		padding: 0;
	}
	img {
		border: 1px solid #0000001a;
	}
	p {
		max-width: 640px;
	}
	.margin-top {
		margin-top: 1em;
	}
`;
