<script>
	import CartItem from './cart-item.svelte';
	import emptyCart from '$lib/assets/empty-cart.jpg';
	import SectionHeadline from '../page/section-headline.svelte';

	export let cartItems = [];
</script>

<div class="mt-10 w-full">
	<SectionHeadline>Cart ({cartItems.length})</SectionHeadline>
</div>
<div
	class="flex flex-col gap-4 items-center justify-center bg-slate-100 p-2 md:p-10 lg:px-16 rounded-xl w-full"
>
	{#if cartItems.length <= 0}
		<img class="rounded-full opacity-40 p-4 smd:max-w-sm" src={emptyCart} alt="" />
		<p class="italic text-dark-500">It looks like your cart is empty...</p>
	{:else}
		{#each cartItems as cartItem}
			<CartItem {cartItem} />
		{/each}
	{/if}
</div>
