<script>
	import '../app.css';
</script>

<div class="items-center justify-center flex flex-col w-full">
	<slot />
</div>

<style>
	:global(.svelte-body) {
		border: 8px solid black;
	}
</style>
