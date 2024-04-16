<script>
	const photos = [
		0, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 26, 27, 25, 20, 21
	];
</script>

<!-- Create a simple Svelte component that displays these photos -->
<div class="gallery">
	{#each photos as p}
		<img src={`/photos/${p}.jpg`} alt="" />
	{/each}
	<div style="padding: 1px;"></div>
</div>

<style lang="scss">
	.gallery {
		display: flex;
		gap: 1rem;
		@media (max-width: 860px) {
			flex-direction: column;
			img {
				width: 100%;
				:nth-child(2) {
					margin-top: 0;
				}
			}
		}
		@media (min-width: 861px) {
			flex-direction: row;
			height: 100%;
			::-webkit-scrollbar {
				display: none;
			}
			img {
				height: 100%;
			}
		}
	}
</style>
