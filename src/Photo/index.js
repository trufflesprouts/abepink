import React from "react";
import styled from "styled-components";

const photos = [ 0, 22, 23, 24, 31, 32, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 26, 27, 25, 20, 21 ]; // prettier-ignore

export default () => {
	return (
		<Gallery>
			<ul className="navigation placeholder">
				<li>abe baali</li>
			</ul>
			{photos.map(p => (
				<img key={p} src={`/static/photos/${p}.jpg`} alt="" />
			))}
			<div style={{ padding: "1px" }}></div>
		</Gallery>
	);
};

const Gallery = styled.div`
	@media (max-width: 860px) {
		.navigation {
			display: none !important;
		}
		img {
			width: 100%;
			margin-top: 1em;
			:nth-child(2) {
				margin-top: 0;
			}
		}
	}
	@media (min-width: 861px) {
		position: absolute;
		display: flex;
		left: 0;
		top: 1em;
		bottom: 1em;
		right: 0;
		padding: 0 1em;
		overflow: scroll;
		-ms-overflow-style: none;
		::-webkit-scrollbar {
			display: none;
		}
		img {
			height: 100%;
			margin-right: 1em;
		}
	}
`;
