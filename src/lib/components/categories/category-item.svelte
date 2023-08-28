<script>
	import Icon from '@iconify/svelte';

	export let icon = 'file-icons:default';
	export let text = 'default';
	export let url = '';
</script>

<a href={url}>
	<div class="flex flex-col justify-center items-center">
		<div class="p-2 smd:p-3 md:p-6 rounded-md bg-blue-100 text-blue-400">
			<Icon {icon} width="30" height="30" />
		</div>
		<p class="text-xs capitalize text-dark-500 mt-1">{text}</p>
	</div>
</a>
