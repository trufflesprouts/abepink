<script>
	// import Header from './Header.svelte';
	// import '/fonts/stylesheet.css?url';
</script>

<div class="app">
	<nav>
		<ul>
			<li>
				<a href="/">abe baali</a>
			</li>
			<li>
				<a href="/code">code</a>
			</li>
			<li>
				<a href="/photos">photos</a>
			</li>
			<li>
				<a href="/words" class="words">words</a>
			</li>

			<li>
				<a href="/about">about</a>
			</li>
		</ul>
	</nav>
	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.app {
		display: flex;
		min-height: 100vh;
		width: 100vw;
	}
	ul {
		height: 100%;
		display: flex;
		flex-direction: column;
		flex: none;
		z-index: 3;
		padding: 1rem;
		box-sizing: border-box;
		li {
			list-style: none;
			&:last-of-type {
				margin-top: auto;
			}
		}
		a {
			text-decoration: none;
			&:hover {
				color: #ff3d00;
			}
		}
	}
	main {
		flex: auto;
		padding: 1rem;
		overflow: auto;
		box-sizing: border-box;
	}
</style>
