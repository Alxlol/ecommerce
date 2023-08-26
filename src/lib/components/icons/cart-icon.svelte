<script>
	import Icon from '@iconify/svelte';
	import { cartItems } from '../../../stores/cart';
</script>

<a href="/cart">
	<Icon icon="mdi:cart" width="30" height="30" />
	<!-- Empty div (w-0 and h-0) to prevent the indicator to take up document space -->
	<div class="relative w-0 h-0 {$cartItems.length <= 0 ? 'hidden' : ''}">
		<div
			class="bg-red-500 text-white text-center rounded-full relative -top-8 -right-4 w-4 h-4 flex items-center justify-center"
		>
			<p class="text-xs">{$cartItems.length}</p>
		</div>
	</div>
</a>
