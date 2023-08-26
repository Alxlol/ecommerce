<script>
	import Icon from '@iconify/svelte';
</script>

<nav class="flex justify-between items-center">
	<a href="/" class="flex items-center">
		<Icon icon="carbon:logo-figma" width="30" height="30" />
		<p>OnlineShop</p>
	</a>
	<div class="flex gap-2 text-slate-700">
		<a href="/cart">
			<Icon icon="mdi:cart" width="30" height="30" />
		</a>
		<Icon icon="mdi:user" width="30" height="30" />
	</div>
</nav>
