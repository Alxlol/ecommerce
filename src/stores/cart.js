import { writable, get } from 'svelte/store';

export const cartItems = writable([]);
//{ product: {id: 1, title: "Iphone 6", ...}, quantity: 4 }

export function addToCart(product) {
	let items = get(cartItems);
	let productId = product.id;
	let itemIndex = items.findIndex((item) => {
		return item.product.id == productId;
	});

	if (itemIndex !== -1) {
		cartItems.update(() => {
			let updatedItems = items.map((item) => {
				if (item.product.id === productId) {
					return { product: { ...item.product }, quantity: item.quantity + 1 };
				}
				return item;
			});
			return updatedItems;
		});
	} else {
		//item is not in the cart
		cartItems.update(() => {
			return [...items, { product, quantity: 1 }];
		});
	}
}

export function removeFromCart(product) {
	let items = get(cartItems);
	let productId = product.product.id;
	let itemIndex = items.findIndex((item) => {
		return item.product.id == productId;
	});

	if (product.quantity == 1) {
		items.splice(itemIndex, 1);
	}

	if (itemIndex !== -1) {
		cartItems.update(() => {
			let updatedItems = items.map((item) => {
				if (item.product.id === productId) {
					return { product: { ...item.product }, quantity: item.quantity - 1 };
				}
				return item;
			});
			return updatedItems;
		});
	}
}

export function incrementQuantity(product) {
	let items = get(cartItems);
	let productId = product.product.id;
	cartItems.update(() => {
		let updatedItems = items.map((item) => {
			if (item.product.id === productId) {
				return { product: { ...item.product }, quantity: item.quantity + 1 };
			}
			return item;
		});
		return updatedItems;
	});
}
