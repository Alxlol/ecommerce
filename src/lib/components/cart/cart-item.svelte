<script>
	import Icon from '@iconify/svelte';

	export let product = {};
	export let quantity = 0;
</script>

<div class="flex gap-2 w-full">
	<img class="w-24 h-24 object-cover rounded-md" src={product.thumbnail} alt="" />
	<div class="flex flex-col justify-between w-full">
		<div>
			<p>{product.title}</p>
			<p class="text-sm text-dark-500">by {product.brand}</p>
		</div>
		<div class="flex justify-between w-full">
			<p>$199.99</p>

			<div class="flex items-center gap-4">
				<button class="outline outline-1 outline-slate-300 rounded-full p-1">
					<Icon icon="mdi:minus" width="16" height="16" />
				</button>
				<p>{quantity}</p>
				<button class="outline outline-1 outline-slate-300 rounded-full p-1">
					<Icon icon="mdi:plus" width="16" height="16" />
				</button>
			</div>
		</div>
	</div>
</div>
