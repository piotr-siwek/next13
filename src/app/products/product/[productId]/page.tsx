import { notFound } from "next/navigation";
import { getProduct } from "@/app/actions/getProduct";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export const generateMetadata = async ({
	params: { productId },
}: {
	params: { productId: string };
}) => {
	const product = await getProduct(productId);

	return {
		title: product?.title,
		description: product?.category,
	};
};

const ProductPage = async ({ params: { productId } }: { params: { productId: string } }) => {
	const product = await getProduct(productId);

	if (!product) notFound();
	return (
		<main className="mx-auto max-w-lg">
			<h1>{product.title}</h1>
			<ProductCoverImage src={product.image} alt={product.title} />
			<ProductListItemDescription
				name={product.title}
				category={product.category}
				price={product.price}
			/>
		</main>
	);
};

export default ProductPage;
