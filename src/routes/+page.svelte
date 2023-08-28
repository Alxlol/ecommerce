<script>
	import Banner from '../lib/components/banner/banner.svelte';
	import NewProducts from '../lib/components/new-products/new-products.svelte';
	import Navbar from '../lib/components/nav/navbar.svelte';
	import PageWrapper from '../lib/components/page/page-wrapper.svelte';

	import saleBanner from '$lib/assets/sales-banners/sale_banner_1.svg';
	import saleBanner2 from '$lib/assets/sales-banners/sale_banner_2.svg';
	import SpecialOffers from '../lib/components/special-offers/special-offers.svelte';
	import Footer from '../lib/components/page/footer.svelte';
	import ProductSection from '../lib/components/product/section/product-section.svelte';

	export let data;
	export let products = data.products;
</script>

<Navbar />
<Banner img={saleBanner} headline="Big sale! Right now!" />
<PageWrapper>
	<ProductSection headline="New Products" products={products.slice(10, 20)} />
</PageWrapper>
<Banner img={saleBanner2} headline="Special offers every day!" flip="true" />
<PageWrapper>
	<ProductSection headline="Special Offers" products={products.slice(0, 10)} />
</PageWrapper>
<!-- <Footer /> -->
