<script>
	import Icon from '@iconify/svelte';
	import Menu from './Menu.svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	export let navlinks;
</script>

<button on:click={toggleMenu} class="md:hidden">
	<Icon width="30" height="30" icon="mdi:hamburger-menu" />
</button>

<Menu isOpen={isMenuOpen} onClick={toggleMenu} {navlinks} />
