import { getProduct } from "@/app/actions/getProduct";
import { getProductsList } from "@/app/actions/getProductsList";
import { addToCardAction } from "@/app/api/cart";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
	params: { productId },
}: {
	params: { productId: string };
}) => {
	const product = await getProduct(productId);
	return {
		title: product?.name,
		description: product?.description,
	};
};

const ProductPage = async ({ params: { productId } }: { params: { productId: string } }) => {
	const product = await getProduct(productId);
	const products = await getProductsList();

	if (!product) notFound();
	return (
		<main className="mx-auto max-w-lg">
			<h1>{product.name.trim()}</h1>
			<ProductCoverImage src={product.images[0].url} alt={product.name} />
			<ProductListItemDescription
				name={product.name}
				category={product.categories[0].name}
				price={product.price}
				description={product.description}
			/>
			<div className="mt-12 border-t-2 pt-12" data-testid="related-products">
				<div>Suggested Products</div>
				<ProductsList products={products.slice(0, 5)} />
			</div>

			<form action={addToCardAction}>
				<input type="hidden" value={product.id} name="productId" />
				<AddToCartButton />
			</form>

			<form id="add-review-form" data-testid="add-review-form">
				<label>
					Headline
					<input type="text" name="headline" />
				</label>
				<label>
					Content
					<input type="text" name="content" />
				</label>
				<label>
					Rating
					<input type="text" name="rating" />
				</label>
				<label>
					Name
					<input type="text" name="name" />
				</label>
				<label>
					Email
					<input type="text" name="email" />
				</label>
			</form>
		</main>
	);
};

export default ProductPage;
