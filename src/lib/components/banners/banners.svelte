<script>
	import banner1 from '$lib/assets/banner-1.png';

	let images = [banner1, banner1, banner1];
</script>

<div class="w-full overflow-x-auto whitespace-nowrap my-4">
	<div class="flex gap-2">
		{#each images as image}
			<img src={image} alt="" />
		{/each}
	</div>
</div>
