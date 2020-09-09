import styled from "styled-components";
export default styled.div`
	max-width: 640px;
	h1 {
		margin-bottom: 0.5em;
	}
	h2 {
		margin: 1em 0;
	}
	p {
		margin: 0.7em 0;
		line-height: 1.3em;
	}
	ul,
	ol {
		padding-left: 2em;
	}
	hr {
		margin: 2em 0;
		height: 20px;
		background: url(/static/zig-zag.png) repeat-x 0 0;
		border: 0;
	}
	.inline-code {
		display: inline-block !important;
		font-size: 0.8em;
		padding: 0.2em 0.8em !important;
		line-height: 1em;
		margin-bottom: -0.4em;
	}
	pre {
		background: #f3f3f3 !important;
		border: 1px solid #d2d2d2;
	}
	pre,
	pre * {
		font-family: "Roboto Mono", "Source Code Pro", monospace;
	}
	.react-syntax-highlighter-line-number {
		opacity: 0.5;
	}
`;
