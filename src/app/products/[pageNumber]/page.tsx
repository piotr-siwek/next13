import { getProductsList } from "@/app/actions/getProductsList";
import { type ProductOrderByInput } from "@/gql/graphql";
import { ProductsList } from "@/ui/organisms/ProductsList";
import Link from "next/link";
import { notFound } from "next/navigation";

const ProductsPage = async ({
	params: { pageNumber },
	searchParams: { orderBy },
}: {
	params: { pageNumber: string; orderBy?: string };
	searchParams: { orderBy?: ProductOrderByInput };
}) => {
	const products = await getProductsList(+pageNumber, 5, orderBy);
	if (!products) notFound();
	return (
		<main className="mx-auto max-w-md p-12 sm:max-w-2xl">
			<button>Sort by rating</button>
			<Link
				data-testid="sort-by-price"
				href={{
					pathname: `/products/${pageNumber}`,
					query: { orderBy: "price_DESC" },
				}}
			>
				Sort by prices
			</Link>
			<Link
				href={{
					pathname: `/products/${pageNumber}`,
					query: { orderBy: "price_ASC" },
				}}
			>
				Sort by prices
			</Link>
			<ProductsList products={products} />
		</main>
	);
};

export default ProductsPage;
