import { getCategoryProducts } from "@/app/actions/getCategoryProducts";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
	params: { categoryName },
}: {
	params: { categoryName: string };
}) => {
	// create title with first letter uppercase
	const title = categoryName
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join("-");
	return {
		title,
		description: categoryName,
	};
};

const CategoriesPage = async ({
	params: { categoryName, pageNumber },
}: {
	params: {
		categoryName: string;
		pageNumber: string;
	};
}) => {
	const categoryProducts = await getCategoryProducts({
		slug: categoryName,
		take: 5,
		skip: 5 * (+pageNumber - 1),
	});

	if (!categoryProducts) notFound();

	return (
		<div>
			<ProductsList products={categoryProducts} />
		</div>
	);
};

export default CategoriesPage;
