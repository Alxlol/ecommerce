<script>
	import SectionHeadline from '../page/section-headline.svelte';
	import CategoryItem from './category-item.svelte';

	export let categories = [
		{
			name: 'phones',
			icon: 'mdi:cellphone',
			url: 'category/smartphones'
		},
		{
			name: 'laptops',
			icon: 'mdi:laptop',
			url: 'category/laptops'
		},
		{
			name: 'furniture',
			icon: 'map:furniture-store',
			url: 'category/furniture'
		},
		{
			name: 'watches',
			icon: 'ic:round-watch',
			url: 'category/mens-watches'
		}
	];
</script>

<div class="my-4">
	<SectionHeadline>Categories</SectionHeadline>
	<div class="w-full overflow-x-auto whitespace-nowrap flex justify-between">
		{#each categories as category}
			<CategoryItem text={category.name} icon={category.icon} url={category.url} />
		{/each}
		<CategoryItem text="All" icon="eva:done-all-outline" url="all-products" />
	</div>
</div>
