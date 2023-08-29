<script>
	import Icon from '@iconify/svelte';
	export let name = 'default';
	export let img;
</script>

<div class="flex flex-col gap-4 smd:mx-10 md:mx-0">
	<img class="" src={img} alt="" />
	<div class="flex gap-2 items-center">
		<Icon icon="mdi:star" /><Icon icon="mdi:star" /><Icon icon="mdi:star" /><Icon
			icon="mdi:star"
		/><Icon icon="mdi:star" /><span class="italic text-dark-500 font-light">5/5</span>
	</div>
	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit expedita quibusdam
		corrupti accusantium fugit tenetur excepturi, quia a quos suscipit tempore? Eum quia adipisci
		facilis officiis, voluptas soluta laudantium dolores? Nam sunt cumque iure.
	</p>
	<p class="font-semibold italic text-dark-500">{name}</p>
</div>
