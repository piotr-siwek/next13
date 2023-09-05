import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

interface ProductListItemProps {
	product: {
		id: string;
		name: string;
		category: string;
		price: number;
		coverImage: {
			src: string;
			alt: string;
		};
	};
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
				<ProductListItemDescription
					name={product.name}
					category={product.category}
					price={product.price}
				/>
			</article>
		</li>
	);
};
