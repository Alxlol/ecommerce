<script>
	import AddToCartButton from '../buttons/add-to-cart-button.svelte';
	export let product = {};
</script>

<div class="bg-slate-50 rounded-lg overflow-hidden shadow-md flex flex-col justify-between">
	<a href="/product/{product.id}"
		><img src={product.thumbnail} alt="" class="w-full h-24 smd:h-32 object-cover" /></a
	>
	<div class="p-2 flex flex-col justify-end">
		<a href="/product/{product.id}">
			<p class="text-xs">{product.title}</p>
			<p class="font-semibold mt-2">${product.price}.99</p>
		</a>
		<AddToCartButton {product} />
	</div>
</div>
