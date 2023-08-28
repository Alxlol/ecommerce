<script>
	import CartItem from './cart-item.svelte';
	import emptyCart from '$lib/assets/empty-cart.jpg';

	export let cartItems = [];
</script>

<div class="flex flex-col gap-4 items-center justify-center">
	{#if cartItems.length <= 0}
		<img class="rounded-full opacity-40 p-4 max-w-xs md:max-w-sm" src={emptyCart} alt="" />
		<p class="text-center text-xl">It looks like your cart is empty...</p>
	{:else}
		{#each cartItems as cartItem}
			<CartItem {cartItem} />
		{/each}
	{/if}
</div>
