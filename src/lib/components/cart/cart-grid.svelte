<script>
	import CartItem from './cart-item.svelte';

	export let cartItems = [];
</script>

<div class="flex flex-col gap-4">
	{#each cartItems as cartItem}
		<CartItem {cartItem} />
	{/each}
</div>
