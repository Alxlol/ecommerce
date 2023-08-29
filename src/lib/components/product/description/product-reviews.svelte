<script>
	import Review from './review.svelte';
	import { reviews, addComment } from '../../../../stores/reviews';

	export let userInput = '';
</script>

<div class="w-1/2">
	<p class="text-xl font-semibold mb-4">Add a review</p>
	<form
		action="submit"
		on:submit|preventDefault={() => {
			addComment(userInput);
			userInput = '';
		}}
		class="relative rounded-lg overflow-hidden border-2 border-slate-100"
	>
		<input
			bind:value={userInput}
			placeholder="Leave a comment"
			type="text"
			class="p-2 pr-20 w-full"
		/>
		<button
			on:submit|preventDefault={() => {
				addComment(userInput);
				userInput = '';
			}}
			class="absolute top-0 right-0 h-full px-3 py-1 bg-blue-400 text-white">Post</button
		>
	</form>
</div>
<!-- Comments -->
<p class="text-xl font-semibold mb-6 mt-12">{$reviews.length} comments</p>

<div class="grid grid-cols-2 gap-8 flex-col-reverse">
	{#key $reviews}
		{#each $reviews as review, index}
			<Review {index} />
		{/each}
	{/key}
</div>
