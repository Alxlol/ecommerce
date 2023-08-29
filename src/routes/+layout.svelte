<script>
	import '../app.css';
	import Footer from '../lib/components/page/footer.svelte';
</script>

<div class="min-h-screen flex flex-col justify-between">
	<div class="items-center justify-center flex flex-col w-full">
		<slot />
	</div>
	<Footer />
</div>

<style>
	:global(.svelte-body) {
		border: 8px solid black;
	}
</style>
