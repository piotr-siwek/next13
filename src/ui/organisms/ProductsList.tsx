import { ProductListItem } from "../molecues/ProductListItem";
import { type Product } from "@/app/types/product";

interface ProductsListProps {
	products: Product[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
	console.log({ products });
	return (
		<ul
			className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
