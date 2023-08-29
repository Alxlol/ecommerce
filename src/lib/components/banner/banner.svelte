<script>
	import PageWrapper from '../page/page-wrapper.svelte';

	export let img;
	export let headline = 'default';
	export let content =
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, in officia quasconsequatur aspernatur delectus sit nihil veniam ipsum ad deleniti ut cupiditate voluptates? Accusantium, quibusdam natus molestias fugit molestiae.';
	export let flip = false;
</script>

<div class=" w-full">
	<PageWrapper>
		<div
			class="flex flex-col {flip
				? 'smd:flex-row-reverse'
				: 'smd:flex-row'} items-center justify-center gap-10 md:gap-14 py-4 xl:px-20"
		>
			<div class="w-full justify-center lg:p-4">
				<img class="w-auto rounded-xl max-w-full" src={img} alt="" />
			</div>
			<div class="w-full">
				<p class="text-3xl font-bold mb-4">{headline}</p>
				<p class="text-sm md:text-base">
					{content}
				</p>
			</div>
		</div>
	</PageWrapper>
</div>
