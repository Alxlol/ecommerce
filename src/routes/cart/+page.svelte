<script>
	import CartGrid from '../../lib/components/cart/cart-grid.svelte';
	import PageWrapper from '../../lib/components/page/page-wrapper.svelte';
	import { cartItems } from '../../stores/cart';

	console.log($cartItems);
</script>

<PageWrapper>
	<CartGrid cartItems={$cartItems} />
</PageWrapper>
