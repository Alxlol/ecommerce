<script>
	import CartItem from './cart-item.svelte';

	export let cartItems = [];
</script>

<div class="flex flex-col gap-4">
	{#each cartItems as cartItem}
		<CartItem product={cartItem.product} quantity={cartItem.quantity} />
	{/each}
</div>
