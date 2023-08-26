<script>
	import CartItem from './cart-item.svelte';
	import emptyCart from '$lib/assets/empty-cart.jpg';

	export let cartItems = [];
</script>

<div class="flex flex-col gap-4">
	{#if cartItems.length <= 0}
		<img class="rounded-full opacity-40 p-4" src={emptyCart} alt="" />
		<p class="text-center relative -top-48 text-xl">It looks like your cart is empty...</p>
	{:else}
		{#each cartItems as cartItem}
			<CartItem {cartItem} />
		{/each}
	{/if}
</div>
