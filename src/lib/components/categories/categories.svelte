<script>
	import SectionHeadline from '../page/section-headline.svelte';
	import CategoryItem from './category-item.svelte';

	export let onClick;

	export let categories = [
		{
			name: 'all',
			icon: 'material-symbols:all-out',
			url: 'all'
		},
		{
			name: 'phones',
			icon: 'mdi:cellphone',
			url: 'smartphones'
		},
		{
			name: 'laptops',
			icon: 'mdi:laptop',
			url: 'laptops'
		},
		{
			name: 'furniture',
			icon: 'map:furniture-store',
			url: 'furniture'
		},
		{
			name: 'sunglasses',
			icon: 'ion:glasses',
			url: 'sunglasses'
		},
		{
			name: 'jewlery',
			icon: 'game-icons:heart-necklace',
			url: 'womens-jewellery'
		},
		{
			name: 'watches',
			icon: 'ic:round-watch',
			url: 'mens-watches'
		},
		{
			name: 'groceries',
			icon: 'material-symbols:food-bank',
			url: 'groceries'
		},
		{
			name: 'fragrances',
			icon: 'solar:perfume-bold',
			url: 'fragrances'
		}
	];
</script>

<div class="my-4 w-full mb-12">
	<SectionHeadline>Categories</SectionHeadline>
	<div class="w-full overflow-x-auto whitespace-nowrap flex justify-between">
		{#each categories as category}
			<CategoryItem {onClick} text={category.name} icon={category.icon} url={category.url} />
		{/each}
		<!-- <CategoryItem text="All" icon="eva:done-all-outline" url="all-products" /> -->
	</div>
</div>
