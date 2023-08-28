<script>
	import { addToCart } from '../../../stores/cart';
	export let product = {};
</script>

<button
	on:click={() => addToCart(product)}
	class="bg-blue-400 py-2 w-full rounded-md text-white text-sm font-light mt-4 md:py-4 md:text-base"
	>Add to cart</button
>
