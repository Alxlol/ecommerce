<script>
	import Icon from '@iconify/svelte';
	import PageWrapper from '../../lib/components/page/page-wrapper.svelte';
</script>

<div class="min-h-screen">
	<PageWrapper>
		<nav class="flex justify-between items-center text-slate-700">
			<a href="/">
				<Icon icon="ic:round-arrow-back" width="30" height="30" />
			</a>
			<p>Your cart</p>
			<Icon icon="mdi:cart" width="30" height="30" />
		</nav>
	</PageWrapper>

	<slot />
</div>
