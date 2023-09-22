import { ProductsList } from "@/ui/organisms/ProductsList";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductsList } from "../actions/getProductsList";

const ProductsPage = async () => {
	const products = await getProductsList(1, 4);

	if (!products) notFound();

	return (
		<main className="mx-auto max-w-md p-12 sm:max-w-2xl">
			<h1>Products</h1>
			<ProductsList products={products} />
			<Link href={"/products/1"}>Show More</Link>
		</main>
	);
};

export default ProductsPage;
