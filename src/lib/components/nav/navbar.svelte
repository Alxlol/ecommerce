<script>
	import Icon from '@iconify/svelte';
	import CartIcon from '../icons/cart-icon.svelte';
	import PageWrapper from '../page/page-wrapper.svelte';
	import Navlink from './navlink.svelte';
	import Hamburger from '../hamburger/hamburger.svelte';

	const navlinks = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'Browse',
			url: '/all-products'
		},
		{
			name: 'About Us',
			url: '/about'
		},
		{
			name: 'Contact',
			url: '/contact'
		}
	];
</script>

<PageWrapper>
	<nav class="flex justify-between items-center">
		<a href="/" class="flex items-center">
			<Icon icon="carbon:logo-figma" width="30" height="30" />
			<p>OnlineShop</p>
		</a>
		<!-- Large navmenu -->
		<ul class="hidden md:flex items-center gap-10">
			{#each navlinks as navlink}
				<Navlink {navlink} />
			{/each}
		</ul>
		<div class="flex gap-4 text-slate-700">
			<Hamburger {navlinks} />
			<CartIcon />
			<Icon icon="mdi:user" width="30" height="30" />
		</div>
	</nav>
</PageWrapper>
