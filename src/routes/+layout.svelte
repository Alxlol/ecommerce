<script>
	import '../app.css';
	import Navbar from '../lib/components/nav/navbar.svelte';
	import Search from '../lib/components/nav/search.svelte';
	import PageWrapper from '../lib/components/page/page-wrapper.svelte';
</script>

<PageWrapper>
	<Navbar />
	<Search />
	<slot />
</PageWrapper>
