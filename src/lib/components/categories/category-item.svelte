<script>
	import Icon from '@iconify/svelte';

	export let icon = 'file-icons:default';
	export let text = 'default';
	export let url = '';

	let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize} />

<a href={url}>
	<div
		class="flex flex-col justify-center items-center text-blue-500 md:border-2 border-blue-500 rounded-full
		hover:text-white hover:border-none hover:bg-blue-500 transition-colors duration-200
		md:w-24 md:h-24
		"
	>
		<Icon {icon} width={screenSize >= 768 ? '40' : '30'} height={screenSize >= 768 ? '40' : '30'} />
		<p class="text-xs capitalize mt-1">{text}</p>
	</div>
</a>
