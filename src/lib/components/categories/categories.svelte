<script>
	import SectionHeadline from '../page/section-headline.svelte';
	import CategoryItem from './category-item.svelte';

	export let categories = [
		{
			name: 'Office',
			icon: 'mdi:office-chair'
		},
		{
			name: 'Gaming',
			icon: 'maki:gaming'
		},
		{
			name: 'Audio',
			icon: 'mdi:audio'
		},
		{
			name: 'Streaming',
			icon: 'material-symbols:stream'
		},
		{
			name: 'All',
			icon: 'eva:done-all-outline'
		}
	];
</script>

<div class="my-4">
	<SectionHeadline>Categories</SectionHeadline>
	<div class="w-full overflow-x-auto whitespace-nowrap flex justify-between">
		{#each categories as category}
			<CategoryItem text={category.name} icon={category.icon} />
		{/each}
	</div>
</div>
