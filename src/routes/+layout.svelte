<script>
	import Theme from '$lib/+theme.svelte';
</script>

<Theme />

<div class="app">
	<nav>
		<ul class="real-list">
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
	nav {
		position: relative;
	}
	.spaceholder {
		opacity: 0;
		visibility: hidden;
		user-select: none;
		pointer-events: none;
		padding: 1em;
	}
	ul {
		white-space: nowrap;
		height: 100%;
		display: flex;
		flex-direction: column;
		flex: none;
		z-index: 3;
		padding: 1rem;
		box-sizing: border-box;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
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
		padding-left: calc(100px + 1em);
		overflow: auto;
		box-sizing: border-box;
	}
</style>
