<script>
	import Icon from '@iconify/svelte';

	export let icon = 'file-icons:default';
	export let text = 'default';
</script>

<div class="flex flex-col justify-center items-center">
	<div class="p-1 rounded-md bg-blue-100 text-blue-400">
		<Icon {icon} width="30" height="30" />
	</div>
	<p class="text-xs text-dark-500 mt-1">{text}</p>
</div>
