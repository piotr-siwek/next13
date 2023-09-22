import Link from "next/link";

import { type ProductGetSingleOneQuery } from "@/gql/graphql";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
interface ProductListItemProps {
	product: ProductGetSingleOneQuery["product"];
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	if (!product) return null;

	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage src={product.images[0].url} alt={product.name} />
					<ProductListItemDescription
						name={product.name}
						category={product.categories?.[0]?.name}
						price={product.price}
					/>
				</article>
			</Link>
		</li>
	);
};
