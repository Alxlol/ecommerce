<script>
	import AddToCartButton from '../buttons/add-to-cart-button.svelte';
	import Icon from '@iconify/svelte';
	export let product = {};
</script>

<div
	class="bg-slate-50 rounded-lg overflow-hidden shadow-md flex flex-col justify-between max-w-[15rem]"
>
	<a href="/product/{product.id}"
		><img
			src={product.thumbnail}
			alt="picture of {product.category}"
			class="w-full object-cover h-32"
		/></a
	>
	<div class="p-2 lg:p-4 flex flex-col justify-end">
		<a class="flex justify-between items-center" href="/product/{product.id}">
			<div>
				<p class="text-xs">{product.title}</p>
				<p class=" text-sm font-semibold mt-2">${product.price}.99</p>
			</div>
			<div>
				<Icon icon="ant-design:heart-twotone" color="rgb(248 113 113)" width="30" height="30" />
			</div>
		</a>
		<AddToCartButton {product} />
	</div>
</div>
