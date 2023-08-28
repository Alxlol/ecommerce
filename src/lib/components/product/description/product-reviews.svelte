<script>
	import Review from './review.svelte';
	import { reviews, addComment } from '../../../../stores/reviews';
</script>

<div class="w-1/2">
	<p class="text-xl font-semibold mb-4">Add a review</p>
	<div class="relative rounded-lg overflow-hidden border-2 border-slate-100">
		<input placeholder="Leave a comment" type="text" class="p-2 pr-20 w-full" />
		<button
			on:click={addComment}
			class="absolute top-0 right-0 h-full px-3 py-1 bg-blue-400 text-white">Post</button
		>
	</div>
</div>
<!-- Comments -->
<p class="text-xl font-semibold mb-6 mt-12">{$reviews.length} comments</p>

<div class="flex gap-8 flex-col-reverse">
	{#each $reviews as review}
		<Review {review} />
	{/each}
</div>
