<script>
	import Banners from '../lib/components/banners/banners.svelte';
	import Categories from '../lib/components/categories/categories.svelte';
	import NewProducts from '../lib/components/new-products/new-products.svelte';
	import Navbar from '../lib/components/nav/navbar.svelte';
	import Search from '../lib/components/nav/search.svelte';

	export let data;
	export let products = data.products;
</script>

<Navbar />
<Search />
<Banners />
<Categories />
<NewProducts {products} />
