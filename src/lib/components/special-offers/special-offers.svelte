<script>
	import SectionHeadline from '../page/section-headline.svelte';
	import ProductCard from '../product/product-card.svelte';
	import ProductGrid from '../product/product-grid.svelte';

	export let products = [{}];
</script>

<SectionHeadline>Special Offers</SectionHeadline>
<ProductGrid>
	{#each products as product}
		<ProductCard {product} />
	{/each}
</ProductGrid>
