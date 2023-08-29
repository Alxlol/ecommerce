<script>
	import PageWrapper from '../../../lib/components/page/page-wrapper.svelte';
	import ProductDescription from '../../../lib/components/product/description/product-description.svelte';
	import ProductReviews from '../../../lib/components/product/description/product-reviews.svelte';
	import ProductSection from '../../../lib/components/product/section/product-section.svelte';

	export let data;

	export let products = data.products;
	export let productId = data.productId;

	export const product = products.find((item) => {
		return item.id == productId;
	});
</script>

<PageWrapper>
	<ProductDescription {product} />
	<hr class="my-4" />
	<ProductReviews />
	<!-- TODO: update page when clicking on another product -->
	<ProductSection headline="You might also like" products={products.slice(20, 25)} />
</PageWrapper>
