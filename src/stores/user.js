import { writable } from 'svelte/store';

const user = writable({
	name: 'John',
	age: 27,
	likedPosts: []
});
