<!-- Menu.svelte -->
<script>
	export let isOpen = false;
	export let navlinks;
	export let onClick;
</script>

<ul class="menu bg-white w-full text-center flex md:hidden" class:open={isOpen}>
	{#each navlinks as navlink}
		<li>
			<a on:click={onClick} href={navlink.url}>{navlink.name}</a>
		</li>
		<hr class="my-2" />
	{/each}
</ul>

<style>
	.menu {
		display: none;
		position: absolute;
		bottom: 75%;
		left: 0;
		z-index: 1;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease-in-out;
		transform-origin: bottom center;
		transform: scaleY(0);
	}

	.open {
		display: block;
		transform: scaleY(1);
	}

	@media (min-width: 768px) {
		.open {
			display: none;
		}
	}
</style>
