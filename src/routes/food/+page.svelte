<script>
	const photos = Array.from({ length: 14 }, (_, i) => i + 1);
</script>

<!-- Create a simple Svelte component that displays these photos -->
<div class="gallery">
	{#each photos as p}
		<img src={`/food/${p}.jpeg`} alt="" />
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
