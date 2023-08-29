<script>
	import Banner from '../lib/components/banner/banner.svelte';
	import Navbar from '../lib/components/nav/navbar.svelte';
	import PageWrapper from '../lib/components/page/page-wrapper.svelte';

	import saleBanner from '$lib/assets/sales-banners/sale_banner_1.svg';
	import saleBanner2 from '$lib/assets/sales-banners/sale_banner_2.svg';
	import ProductSection from '../lib/components/product/section/product-section.svelte';
	import PageTransition from '../lib/components/page/page-transition.svelte';

	export let data;
	export let products = data.products;
</script>

<Navbar />
<PageTransition>
	<Banner img={saleBanner} headline="Huge sale! Upto 50% off on all products" />
	<PageWrapper>
		<ProductSection headline="New Products" products={products.slice(10, 20)} />
	</PageWrapper>
	<Banner img={saleBanner2} headline="Special offers every day!" flip="true" />
	<PageWrapper>
		<ProductSection headline="Special Offers" products={products.slice(0, 10)} />
	</PageWrapper>
	<!-- <Footer /> -->
</PageTransition>
