<script>
	import { likeComment, reviews } from '../../../../stores/reviews';
	import Icon from '@iconify/svelte';

	export let index;
	let review = $reviews[index];
</script>

{#key review}
	<div class="flex gap-4 w-full">
		<div class="">
			<img class="rounded-full overflow-hidden w-16" src={review.img} alt="" />
		</div>
		<div class="flex flex-col gap-2 w-full">
			<div class="flex justify-between">
				<p class="font-semibold">{review.name}</p>
				<p>{$reviews[index].reactions} {$reviews[index].reactions != 1 ? 'likes' : 'like'}</p>
			</div>
			<p>{review.body}</p>
			<div class="flex justify-between">
				<div class="flex items-center gap-2 {$reviews[index].liked ? 'text-blue-400' : ''}">
					{#if $reviews[index].liked}
						<Icon icon="mdi:thumbs-up" />
					{/if}
					<button
						disabled={$reviews[index].liked}
						on:click={() => likeComment(review)}
						class="font-bold">Like</button
					>
				</div>
				<p class="text-sm italic text-dark-500">{review.time}</p>
			</div>
			<hr class="mt-4" />
		</div>
	</div>
{/key}
