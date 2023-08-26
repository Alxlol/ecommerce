<script>
	export let product = {};
</script>

<div class="bg-slate-50 rounded-lg overflow-hidden shadow-md flex flex-col justify-between">
	<a href="/"><img src={product.thumbnail} alt="" class="w-full h-20 object-cover" /></a>
	<div class="p-2 flex flex-col justify-end">
		<a href="/">
			<p class="text-xs">{product.title}</p>
			<p class="font-semibold mt-2">${product.price}.99</p>
		</a>
		<button class="bg-blue-400 py-2 w-full rounded-md text-white text-sm font-light mt-4"
			>Add to cart</button
		>
	</div>
</div>
