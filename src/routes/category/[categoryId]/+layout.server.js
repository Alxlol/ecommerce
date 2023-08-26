export async function load({ params }) {
	const response = await fetch(`https://dummyjson.com/products/category/${params.categoryId}`);
	const data = await response.json();
	return {
		products: data.products,
		category: params.categoryId
	};
}
