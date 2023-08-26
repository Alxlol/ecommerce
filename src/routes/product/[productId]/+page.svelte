<script>
	import AddToCartButton from '../../../lib/components/buttons/add-to-cart-button.svelte';
	import BuyNowButton from '../../../lib/components/buttons/buy-now-button.svelte';
	import PageWrapper from '../../../lib/components/page/page-wrapper.svelte';
	import Icon from '@iconify/svelte';

	export let data;

	export let products = data.products;
	export let productId = data.productId;

	export const product = products.find((item) => {
		return item.id == productId;
	});
</script>

<img class="w-full" src={product.thumbnail} alt="" />
<PageWrapper>
	<div class="flex items-center justify-between">
		<div>
			<p class="text-lg">{product.title} by {product.brand}</p>
			<p>
				${product.price}.99
				<span class="text-xs text-dark-500">( 219 people bought this )</span>
			</p>
		</div>
		<div>
			<Icon icon="ant-design:heart-twotone" color="rgb(248 113 113)" width="30" height="30" />
		</div>
	</div>
	<hr class="my-4" />
	<div class="mt-4">
		<p class="text-sm text-dark-500">Choose a color</p>
		<div class="flex gap-4 mt-2">
			<div class="w-10 h-10 bg-slate-300 rounded-full shadow-md" />
			<div class="w-10 h-10 bg-red-300 rounded-full shadow-md" />
			<div class="w-10 h-10 bg-blue-300 rounded-full shadow-md selected" />
			<div class="w-10 h-10 bg-yellow-300 rounded-full shadow-md" />
		</div>
	</div>
	<hr class="my-4" />
	<div>
		<p class="text-lg">Product description</p>
		<p class="text-sm">
			{product.description}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vel
			ipsum id reprehenderit laboriosam quidem recusandae nostrum quaerat culpa ad, magni sed
			accusantium dolorem voluptas explicabo sapiente eos, quibusdam placeat aspernatur officia
			perferendis a odio quas non. Iste, maiores optio!
		</p>
	</div>
	<hr class="my-4" />
	<div class="flex gap-6">
		<!-- <button class="bg-blue-400 py-2 w-full rounded-md text-white text-sm font-light mt-4"
			>Add to cart</button
		> -->
		<AddToCartButton {product} />
		<BuyNowButton {product} />
	</div>
</PageWrapper>

<style>
	.selected {
		outline: 2px solid white;
		box-shadow: 0 0 7px grey;
	}
</style>
