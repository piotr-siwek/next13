import { type ProductsGetListQuery } from "@/gql/graphql";
import { ProductListItem } from "../molecues/ProductListItem";

interface ProductsListProps {
	products: ProductsGetListQuery["products"];
}

export const ProductsList = ({ products }: ProductsListProps) => {
	return (
		<>
			<ul
				className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => (
					<ProductListItem key={product?.id} product={product} />
				))}
			</ul>
		</>
	);
};
