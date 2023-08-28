<script>
	import Icon from '@iconify/svelte';

	export let icon;
</script>

<div class="rounded-full p-1 outline-1 outline outline-white hover:scale-105">
	<a href="/">
		<Icon {icon} />
	</a>
</div>
