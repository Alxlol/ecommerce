<script>
	export let review;
</script>

<div class="flex gap-4 w-full">
	<div>
		<img class="rounded-full overflow-hidden" src="https://placehold.co/64x64" alt="" />
	</div>
	<div class="flex flex-col gap-2 w-full">
		<div class="flex justify-between">
			<p class="font-semibold">{review.name}</p>
			<p>{review.reactions} likes</p>
		</div>
		<p>{review.body}</p>
		<div class="flex justify-between">
			<button class="font-bold">Like</button>
			<p class="text-sm italic text-dark-500">about 1 hour ago</p>
		</div>
		<hr class="mt-4" />
	</div>
</div>
