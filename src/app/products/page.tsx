import { ProductsList } from "@/ui/organisms/ProductsList";

const products = [
	{
		id: "1",
		name: "Product 1",
		category: "Category 1",
		price: 12.21,
		coverImage: {
			src: "https://picsum.photos/seed/1/400/400",
			alt: "Product 1",
		},
	},
	{
		id: "2",
		name: "Product 2",
		category: "Category 2",
		price: 11.22,
		coverImage: {
			src: "https://picsum.photos/seed/2/400/400",
			alt: "Product 2",
		},
	},
	{
		id: "3",
		name: "Product 3",
		category: "Category 3",
		price: 41.12,
		coverImage: {
			src: "https://picsum.photos/seed/3/400/400",
			alt: "Product 3",
		},
	},
	{
		id: "4",
		name: "Product 4",
		category: "Category 4",
		price: 99.99,
		coverImage: {
			src: "https://picsum.photos/seed/4/400/400",
			alt: "Product 4",
		},
	},
];

const ProductsPage = () => {
	return (
		<main className="mx-auto max-w-md p-12 sm:max-w-2xl">
			<ProductsList products={products} />
		</main>
	);
};

export default ProductsPage;
