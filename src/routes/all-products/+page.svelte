<script>
	import Banner from '../../lib/components/banner/banner.svelte';
	import Navbar from '../../lib/components/nav/navbar.svelte';
	import saleBanner from '$lib/assets/sales-banners/sale_banner_1.svg';
	import Categories from '../../lib/components/categories/categories.svelte';
	import PageWrapper from '../../lib/components/page/page-wrapper.svelte';
	import ProductGrid from '../../lib/components/product/product-grid.svelte';
	import ProductCard from '../../lib/components/product/product-card.svelte';
	import { fade } from 'svelte/transition';

	export let data;
	let products = data.products;

	function getProductsFromCategory(category) {
		if (category === 'all') {
			products = data.products;
		} else {
			const newProducts = [];
			data.products.find((item) => {
				if (item.category == category) {
					newProducts.push(item);
				}
			});
			products = newProducts;
		}
	}
</script>

<Navbar />
<Banner img={saleBanner} headline="Browse all of our products" />
<PageWrapper>
	<Categories onClick={getProductsFromCategory} />
	{#key products}
		<div in:fade={{ duration: 600 }}>
			<ProductGrid>
				{#each products as product}
					<ProductCard {product} />
				{/each}
			</ProductGrid>
		</div>
	{/key}
</PageWrapper>
