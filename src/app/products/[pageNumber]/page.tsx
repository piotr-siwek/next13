import { getProductsList } from "@/app/actions/getProductsList";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { notFound } from "next/navigation";

const ProductsPage = async ({ params: { pageNumber } }: { params: { pageNumber: string } }) => {
	const products = await getProductsList(+pageNumber);
	if (!products) notFound();
	return (
		<main className="mx-auto max-w-md p-12 sm:max-w-2xl">
			<ProductsList products={products} />
		</main>
	);
};

export default ProductsPage;
