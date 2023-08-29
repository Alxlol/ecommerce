<script>
	import { addToCart } from '../../../stores/cart';
	import Icon from '@iconify/svelte';
	import Rating from '../util/rating.svelte';
	export let product = {};

	let isClicked = false;
	function animate() {
		isClicked = true;
	}
</script>

<div
	class="w-full h-[22rem] flex flex-col rounded-xl overflow-hidden outline outline-1 outline-gray-200 md:hover:scale-105 transition-transform"
>
	<div class="h-1/2 overflow-hidden flex items-center justify-center">
		<a class="h-full w-full" href="/product/{product.id}">
			<img class="h-full w-full object-cover" src={product.thumbnail} alt="" />
		</a>
	</div>
	<div class="flex flex-col h-1/2 justify-between py-4 px-4">
		<a class="w-full" href="/product/{product.id}">
			<p class="capitalize">{product.title}</p>
		</a>

		<Rating />
		<div class="flex justify-between items-center">
			<p class="text-xl font-semibold">${product.price}.00</p>
			<button
				class:animate={isClicked}
				on:click={() => addToCart(product)}
				on:click={animate}
				class="bg-blue-400 hover:bg-blue-300 p-2 rounded-full text-white"
				><Icon width="24" height="24" icon="mdi:cart" /></button
			>
		</div>
	</div>
</div>

<style>
	.animate {
		background-color: orangered;
		transform: scale(0.76);
		transition: all 0.18s ease-in-out;
	}
</style>
