<script>
	import CartGrid from '../../lib/components/cart/cart-grid.svelte';
	import Icon from '@iconify/svelte';
	import { cartItems } from '../../stores/cart';
	import { fly } from 'svelte/transition';

	function getCartSum() {
		let sum = 0;
		$cartItems.map((item) => (sum += item.product.price * item.quantity));
		return sum;
	}

	let checkout = false;
	function toggleCheckout() {
		checkout = !checkout;
	}
</script>

<div class="lg:px-40 xl:px-48 2xl:px-60">
	<CartGrid cartItems={$cartItems} />
	<hr class="my-10" />
	<div class="flex gap-4 flex-col-reverse md:flex-row justify-between md:items-center text-sm">
		<a class="flex items-center gap-4" href="/"
			><Icon icon="ic:round-arrow-back" width="30" height="30" />Back to shopping</a
		>
		<div class="flex items-center gap-10">
			{#key $cartItems}
				<p class="flex flex-col w-full">
					Total price: <span class="text-lg font-semibold">$ {getCartSum()}.00</span>
				</p>
			{/key}

			<div>
				<button
					on:click={toggleCheckout}
					class="bg-blue-400 hover:bg-blue-300 py-3 px-5 rounded-3xl text-white">Checkout</button
				>
				{#if checkout}
					<p in:fly={{ duration: 500, y: 10 }} class="text-red-400 absolute text-center">
						Sorry no checkout yet
					</p>
				{/if}
			</div>
		</div>
	</div>
</div>
