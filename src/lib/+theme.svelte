<script>
	import { onMount } from 'svelte';

	const SCHEME = '(prefers-color-scheme: dark)';

	onMount(() => {
		setTheme();
		window.matchMedia(SCHEME).addEventListener('change', setTheme);
	});

	const setTheme = () => {
		const theme = window.matchMedia && window.matchMedia(SCHEME).matches ? 'dark' : 'light';
		document.body.setAttribute('data-theme', theme);
	};
</script>
