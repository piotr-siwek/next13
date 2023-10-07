import { type ProductOrderByInput } from "@/gql/graphql";
import { SortyByPrice, SortyByRating } from "@/ui/atoms/SortByPrice";
import { ProductsList } from "@/ui/organisms/ProductsList";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductsList } from "../actions/getProductsList";

const ProductsPage = async ({
	searchParams: { orderBy },
}: {
	searchParams: { orderBy?: ProductOrderByInput };
}) => {
	const products = await getProductsList(1, 4, orderBy);

	if (!products) notFound();

	return (
		<main className="mx-auto max-w-md p-12 sm:max-w-2xl">
			<h1>Products</h1>
			<SortyByPrice />
			<SortyByRating />
			<ProductsList products={products} />
			<Link href={"/products/1"}>Show More</Link>
		</main>
	);
};

export default ProductsPage;
