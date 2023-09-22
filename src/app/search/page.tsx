import { ProductsList } from "@/ui/organisms/ProductsList";
import { getProductsBySearch } from "../actions/getProductsBySearch";

const SearchPage = async ({ searchParams: { query } }: { searchParams: { query: string } }) => {
	const products = await getProductsBySearch(query);
	return (
		<div>
			<h1>Search - {query}</h1>
			<ProductsList products={products} />
		</div>
	);
};

export default SearchPage;
