import React from "react";
import styled from "styled-components";

export default () => {
	return (
		<Style>
			<p>
				<b>hi, i am abe.</b> i am a self-taught programmer and i love making
				things for the web. i currently study aerospace engineering and computer
				science at the university of illinois at urbana-champaign. i worked
				previously with{" "}
				<a target="_blank" rel="noopener noreferrer" href="https://caramel.la/">
					caramella
				</a>{" "}
				developing a new publishing platform, i did lots of things including
				full stack development, testing, and ui/ux design. on the side, i enjoy
				working on tough problems, that’s why i’m focusing on machine learning
				and ai. i hate most dev tools and consider them to be a necessary evil.
				you can find me on the{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.instagram.com/abe.baali/"
				>
					instagrams
				</a>
				, email me at abebaaali@gmail.com, check out{" "}
				<a target="_blank" rel="noopener noreferrer" href="/static/cv.pdf">
					my cv
				</a>
				, buy me a gift from{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.amazon.com/hz/wishlist/ls/25UJ0TD4Q7RQN?&sort=default"
				>
					amazon
				</a>{" "}
				or find me trufflesprouts on github. thank you for reading, pls like &
				subscribe!
			</p>
			<img
				src="/static/me.jpg"
				style={{ maxWidth: "240px", width: "50%" }}
				alt=""
			/>
			<p className="caption">pictured on the right</p>
		</Style>
	);
};

const Style = styled.ul`
	img {
		margin-top: 1em;
	}
	p {
		max-width: 640px;
	}
	.caption {
		opacity: 0.6;
		font-size: 0.8em;
		margin-top: 0.2em;
	}
`;
