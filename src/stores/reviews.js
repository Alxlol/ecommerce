import { writable } from 'svelte/store';

export const reviews = writable([
	{
		name: 'Osbaldo Beahan',
		body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, quam.',
		reactions: 4
	},
	{
		name: 'Gary Neville',
		body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, quam.',
		reactions: 6
	},
	{
		name: 'Lorem Name',
		body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, quam.',
		reactions: 1
	},
	{
		name: 'Lorem Name',
		body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, quam.',
		reactions: 1
	},
	{
		name: 'Lorem Name',
		body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, quam.',
		reactions: 1
	},
	{
		name: 'Lorem Name',
		body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, quam.',
		reactions: 1
	}
]);

export function addComment(comment) {
	reviews.update((reviews) => {
		return [
			...reviews,
			{
				name: 'Test',
				body: 'Hi',
				reactions: 4
			}
		];
	});
}
