import React from "react";
import styled from "styled-components";

export default () => {
	return (
		<Style>
			<p>
				<b>hi, i am abe.</b> i am a senior at the university of illinois
				urbana-champaign studying computer science. last summer, i shipped
				a lot of instagram direct and facebook web features during my internship
				at meta. the summer before that i interned with the sell-side customer
				growth team at redfin building an app that gets used by 70k users a day.
				before that i worked on
				{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://karmatrade.shop/"
				>
					karma trade
				</a>
				{" "}
				developing an online cloth swapping platform and
				{" "}
				<a target="_blank" rel="noopener noreferrer" href="https://caramel.la/">
					caramella
				</a>{" "}
				creating a new online publishing platform that’s focused on creating
				beautiful custom designs, i did lots of things including full stack
				development, testing, and ui/ux design.
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
					my résumé
				</a>
				, buy me a gift from{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.amazon.com/hz/wishlist/ls/3OGDF67LDES4"
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
