<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let showContent = false;
	onMount(() => {
		showContent = true;
	});
</script>

{#if showContent}
	<div in:fade={{ duration: 650 }}>
		<slot />
	</div>
{/if}
