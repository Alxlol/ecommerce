export async function load() {
	const response = await fetch('https://dummyjson.com/products/?skip=0&limit=100');
	const products = await response.json();

	return { products: products.products };
}
