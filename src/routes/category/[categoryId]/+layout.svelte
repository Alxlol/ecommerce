<script>
	import Icon from '@iconify/svelte';
	import PageWrapper from '../../../lib/components/page/page-wrapper.svelte';
	import CartIcon from '../../../lib/components/icons/cart-icon.svelte';

	export let data;
</script>

<div class="min-h-screen">
	<PageWrapper>
		<nav class="flex justify-between items-center text-slate-700">
			<a href="/">
				<Icon icon="ic:round-arrow-back" width="30" height="30" />
			</a>
			<p class="capitalize">{data.category}</p>
			<CartIcon />
		</nav>
	</PageWrapper>

	<slot />
</div>
