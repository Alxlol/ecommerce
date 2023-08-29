<script context="module">
	import { writable } from 'svelte/store';

	let activeId = writable(0);
	let id = 0;
</script>

<script>
	import Icon from '@iconify/svelte';

	const componentId = id++;
	$: active = $activeId === componentId;

	function setActive() {
		$activeId = componentId;
	}

	export let icon = 'file-icons:default';
	export let text = 'default';
	export let url = '';

	export let onClick;

	let screenSize;
</script>

<svelte:window bind:innerWidth={screenSize} />

<button on:click={setActive} on:click={() => onClick(url)}>
	<div
		class="flex flex-col justify-center items-center text-blue-500
		w-20 h-20 {active ? 'bg-blue-100' : 'bg-none'} rounded-xl
			"
	>
		<Icon {icon} width={screenSize >= 768 ? '40' : '30'} height={screenSize >= 768 ? '40' : '30'} />
		<p class="text-xs capitalize mt-1">{text}</p>
	</div>
</button>
