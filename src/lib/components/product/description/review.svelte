<script>
	import { likeComment } from '../../../../stores/reviews';
	import Icon from '@iconify/svelte';

	export let review;
	let hasLiked = false;
	function toggleHasLiked() {
		hasLiked = !hasLiked;
	}
</script>

<div class="flex gap-4 w-full">
	<div class="">
		<img class="rounded-full overflow-hidden w-16" src={review.img} alt="" />
	</div>
	<div class="flex flex-col gap-2 w-full">
		<div class="flex justify-between">
			<p class="font-semibold">{review.name}</p>
			<p>{review.reactions} {review.reactions != 1 ? 'likes' : 'like'}</p>
		</div>
		<p>{review.body}</p>
		<div class="flex justify-between">
			<div class="flex items-center gap-2 {hasLiked ? 'text-blue-400' : ''}">
				{#if hasLiked}
					<Icon icon="mdi:thumbs-up" />
				{/if}
				<button
					disabled={hasLiked}
					on:click={toggleHasLiked}
					on:click={() => likeComment(review)}
					class="font-bold">Like</button
				>
			</div>

			<p class="text-sm italic text-dark-500">{review.time}</p>
		</div>
		<hr class="mt-4" />
	</div>
</div>
