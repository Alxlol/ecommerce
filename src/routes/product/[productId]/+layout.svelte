<script>
	import PageWrapper from '../../../lib/components/page/page-wrapper.svelte';
	import CartIcon from '../../../lib/components/icons/cart-icon.svelte';
	import BackIcon from '../../../lib/components/icons/back-icon.svelte';
</script>

<PageWrapper>
	<nav class="flex justify-between items-center text-slate-700 w-full">
		<BackIcon />
		<p>Product details</p>
		<CartIcon />
	</nav>
</PageWrapper>

<slot />
