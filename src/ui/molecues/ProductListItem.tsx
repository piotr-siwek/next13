import Link from "next/link";

import { type Product } from "@/app/types/product";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
interface ProductListItemProps {
	product: Product;
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	console.log({ product });
	return (
		<li>
			<Link href={`/products/product/${product.id}`}>
				<article>
					<ProductCoverImage src={product.image} alt={product.title} />
					<ProductListItemDescription
						name={product.title}
						category={product.category}
						price={product.price}
					/>
				</article>
			</Link>
		</li>
	);
};
