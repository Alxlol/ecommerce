<script>
	import Icon from '@iconify/svelte';

	export let product = {};
	export let quantity = 0;
</script>

<div class="flex gap-2 w-full bg-slate-50 p-2 rounded-lg shadow-md">
	<img class="w-24 h-24 object-cover rounded-md" src={product.thumbnail} alt="" />
	<div class="flex flex-col justify-between w-full">
		<div>
			<a href="/product/{product.id}">
				<p>{product.title}</p>
			</a>
			<p class="text-sm text-dark-500">by {product.brand}</p>
		</div>
		<div class="flex justify-between w-full">
			<p>${product.price}.00</p>

			<div class="flex items-center gap-3">
				<button class="outline outline-1 outline-slate-300 rounded-full p-1">
					<Icon icon="mdi:minus" width="12" height="12" />
				</button>
				<p>{quantity}</p>
				<button class="outline outline-1 outline-slate-300 rounded-full p-1">
					<Icon icon="mdi:plus" width="12" height="12" />
				</button>
			</div>
		</div>
	</div>
</div>
