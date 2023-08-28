<script>
	import SectionHeadline from '../../page/section-headline.svelte';
	import ProductCard from '../product-card.svelte';
	import ProductGrid from '../product-grid.svelte';

	export let products;
	export let headline = 'default';
</script>

<SectionHeadline>{headline}</SectionHeadline>
<ProductGrid>
	{#each products as product}
		<ProductCard {product} />
	{/each}
</ProductGrid>
