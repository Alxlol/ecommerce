<script>
	import PageWrapper from '../page/page-wrapper.svelte';

	export let img;
	export let headline = 'default';
	export let flip = false;
</script>

<div class="bg-gray-200 w-full">
	<PageWrapper>
		<div
			class="flex flex-col {flip
				? 'smd:flex-row-reverse'
				: 'smd:flex-row'} items-center justify-center gap-10 md:gap-14 py-4 xl:px-20"
		>
			<div class="w-full justify-center">
				<img class="w-auto border-2 max-w-full" src={img} alt="" />
			</div>
			<div class="w-full">
				<p class="text-3xl font-bold mb-4">{headline}</p>
				<p class="text-sm md:text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, in officia quas
					consequatur aspernatur delectus sit nihil veniam ipsum ad deleniti ut cupiditate
					voluptates? Accusantium, quibusdam natus molestias fugit molestiae.
				</p>
			</div>
		</div>
	</PageWrapper>
</div>
