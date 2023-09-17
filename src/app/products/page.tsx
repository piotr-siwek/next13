import Link from "next/link";
import { notFound } from "next/navigation";
import { getPaginatedProductsList } from "../actions/getPaginatedProductsList";
import { ProductsList } from "@/ui/organisms/ProductsList";

const ProductsPage = async () => {
	const products = await getPaginatedProductsList(1, 4);

	if (!products) notFound();

	return (
		<main className="mx-auto max-w-md p-12 sm:max-w-2xl">
			<ProductsList products={products} />
			<Link href={"/products/1"}>Show More</Link>
		</main>
	);
};

export default ProductsPage;
