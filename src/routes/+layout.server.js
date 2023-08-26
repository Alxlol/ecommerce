export async function load() {
	const response = await fetch('https://dummyjson.com/products/');
	const products = await response.json();

	return { products: products.products };
}
