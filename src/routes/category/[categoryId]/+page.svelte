<script>
	import PageWrapper from '../../../lib/components/page/page-wrapper.svelte';
	import ProductCard from '../../../lib/components/product/product-card.svelte';
	import ProductGrid from '../../../lib/components/product/product-grid.svelte';

	export let data;
</script>

<PageWrapper>
	<ProductGrid>
		{#each data.products as product}
			<ProductCard {product} />
		{/each}
	</ProductGrid>
</PageWrapper>
