<script>
	import Icon from '@iconify/svelte';
	import ContactIcon from '../icons/contact-icon.svelte';
</script>

<footer class="bg-slate-400 w-full mt-10 flex gap-4 flex-col items-center justify-center p-6">
	<div class="flex flex-col items-center lg:flex-row gap-6 md:gap-10 text-white">
		<div class="flex gap-10 text-white">
			<ContactIcon icon="mdi:twitter" />
			<ContactIcon icon="mdi:facebook" />
			<ContactIcon icon="material-symbols:mail" />
		</div>
		<div class="flex flex-col gap-6 md:flex-row md:gap-10 items-center">
			<div class="flex items-center justify-center gap-2 text-white">
				<div class="rounded-full p-1 outline-1 outline outline-white hover:scale-105">
					<Icon icon="mdi:phone" />
				</div>
				<p>+56 584 22 378</p>
			</div>
			<div class="flex items-center justify-center gap-2 text-white">
				<div class="rounded-full p-1 outline-1 outline outline-white hover:scale-105">
					<Icon icon="mdi:location" />
				</div>
				<p class="text-sm">Address 76, Norway</p>
			</div>
		</div>
	</div>
</footer>
