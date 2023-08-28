<script>
	import { addToCart } from '../../../stores/cart';
	export let product = {};
</script>

<button
	on:click={() => addToCart(product)}
	class="bg-blue-400 hover:bg-blue-300 py-2 w-full rounded-md text-white text-xs font-light mt-4 md:py-2"
	>Add to cart</button
>
