<script>
	import CartGrid from '../../lib/components/cart/cart-grid.svelte';
	import PageWrapper from '../../lib/components/page/page-wrapper.svelte';
	import { cartItems } from '../../stores/cart';
</script>

<div class="mb-36">
	<PageWrapper>
		<CartGrid cartItems={$cartItems} />
	</PageWrapper>
</div>

<footer class="bg-slate-100 fixed left-0 bottom-0 w-full p-6">
	<div class="flex justify-between text-sm">
		<p>Total</p>
		<p class="font-semibold">$ 1999.99</p>
	</div>
	<button class="bg-blue-400 rounded-md py-2 w-full mt-6">Checkout</button>
</footer>
