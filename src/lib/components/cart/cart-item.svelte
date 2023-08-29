<script>
	import Icon from '@iconify/svelte';
	import { incrementQuantity, removeFromCart } from '../../../stores/cart';

	export let cartItem = {};
</script>

<div class="flex gap-2 w-full bg-slate-50 p-2 rounded-lg shadow-md">
	<img class="w-24 h-24 object-cover rounded-md" src={cartItem.product.thumbnail} alt="" />
	<div class="flex flex-col justify-between w-full">
		<div>
			<a href="/cartItem.product/{cartItem.product.id}">
				<p class="capitalize lg:text-lg">{cartItem.product.title}</p>
			</a>
			<p class="text-sm text-dark-500">by {cartItem.product.brand}</p>
		</div>
		<div class="flex justify-between w-full">
			<p class="lg:text-lg">${cartItem.product.price}.00</p>

			<div class="flex items-center gap-3">
				<button
					on:click={() => removeFromCart(cartItem)}
					class="outline outline-1 outline-slate-300 rounded-full p-1"
				>
					<Icon icon="mdi:minus" width="12" height="12" />
				</button>
				<p>{cartItem.quantity}</p>
				<button
					on:click={() => incrementQuantity(cartItem)}
					class="outline outline-1 outline-slate-300 rounded-full p-1"
				>
					<Icon icon="mdi:plus" width="12" height="12" />
				</button>
			</div>
		</div>
	</div>
</div>
