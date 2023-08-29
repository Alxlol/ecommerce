<!-- Menu.svelte -->
<script>
	import { fly } from 'svelte/transition';

	export let isOpen = false;
	export let navlinks;
	export let onClick;
</script>

{#key isOpen}
	<ul
		transition:fly={{ duration: 200, y: -80 }}
		class="menu bg-white w-full text-center flex flex-col md:hidden"
		class:open={isOpen}
	>
		{#each navlinks as navlink}
			<li>
				<a on:click={onClick} href={navlink.url}>{navlink.name}</a>
			</li>
			<hr class="my-2" />
		{/each}
	</ul>
{/key}

<style>
	.menu {
		display: none;
		position: absolute;
		top: 70px;
		left: 0;
		z-index: 1;
	}

	.open {
		display: block;
	}

	@media (min-width: 768px) {
		.open {
			display: none;
		}
	}
</style>
