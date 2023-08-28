<script>
	import { addToCart } from '../../../stores/cart';
	import { goto } from '$app/navigation';

	export let product;

	function handleClick() {
		addToCart(product);
		goto(`/cart`);
	}
</script>

<button
	on:click={handleClick}
	class="bg-orange-400 py-2 w-full rounded-md text-white text-xs font-light mt-4 md:py-4 hover:bg-orange-300"
>
	Buy now
</button>
