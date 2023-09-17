import { notFound } from "next/navigation";
import { getPaginatedProductsList } from "@/app/actions/getPaginatedProductsList";
import { ProductsList } from "@/ui/organisms/ProductsList";

const ProductsPage = async ({ params: { pageNumber } }: { params: { pageNumber: string } }) => {
	const products = await getPaginatedProductsList(+pageNumber);
	if (!products) notFound();
	return (
		<main className="mx-auto max-w-md p-12 sm:max-w-2xl">
			<ProductsList products={products} />
		</main>
	);
};

export default ProductsPage;
