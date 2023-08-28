<script>
	import Icon from '@iconify/svelte';
	import AddToCartButton from '../../buttons/add-to-cart-button.svelte';
	import BuyNowButton from '../../buttons/buy-now-button.svelte';

	export let product;
</script>

<div class="flex flex-col px-10 lg:px-0 2xl:px-20 lg:flex-row gap-10 2xl:gap-20 mt-12">
	<div class="flex-1 flex items-center">
		<img class="w-full" src={product.thumbnail} alt="" />
	</div>
	<div class="flex flex-col justify-between flex-1 py-10">
		<div class="flex flex-col gap-6">
			<p class="text-3xl font-semibold capitalize">{product.title}</p>
			<p class="text-2xl font-semibold capitalize">${product.price}.00</p>
			<p class="">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, libero minus doloremque
				quidem aliquam omnis alias praesentium iste similique delectus.
			</p>
			<p class="">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur architecto fugiat
				perferendis culpa? Pariatur, labore neque corporis mollitia unde autem non, ipsum porro
				dolore possimus quaerat! Consequatur placeat dolorum dignissimos iure maxime eum? Sapiente
				sunt ea cumque itaque placeat nostrum laborum consectetur nesciunt similique aliquid, et
				facere nemo culpa ex ut iste dolorem magnam voluptatibus sequi, numquam nihil non doloribus
				doloremque autem. Id ab deserunt perferendis quia aut hic quae!
			</p>

			<hr />
			<div class="flex gap-10">
				<div class="flex gap-2 items-center text-dark-500">
					<Icon width="24" height="24" icon="ic:baseline-star" />
					<p>{product.rating} <span class="text-sm italic text-dark-500">(284)</span></p>
				</div>
				<div class="flex gap-2 items-center text-dark-500">
					<Icon width="24" height="24" icon="material-symbols:category" />
					<p class="capitalize">{product.category}</p>
				</div>
			</div>
			<hr />
		</div>

		<div class="flex flex-col md:flex-row md:gap-10">
			<AddToCartButton {product} />
			<BuyNowButton {product} />
		</div>
	</div>
</div>
