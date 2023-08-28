<script>
	import '../app.css';
	import Footer from '../lib/components/page/footer.svelte';
</script>

<div class="items-center justify-center flex flex-col w-full">
	<slot />
</div>
<Footer />

<style>
	:global(.svelte-body) {
		border: 8px solid black;
	}
</style>
