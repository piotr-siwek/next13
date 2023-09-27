import { CategoriesGetProductsDocument } from "@/gql/graphql";
import { executeGraphql } from "./utils";

export const getCategoryProducts = async ({
	slug,
	take = null,
	skip = 0,
}: {
	slug: string;
	take?: number | null;
	skip?: number;
}) => {
	try {
		const graphqlResponse = await executeGraphql({
			query: CategoriesGetProductsDocument,
			variables: {
				take,
				skip,
				slug,
			},
		});
		return graphqlResponse.categories[0].products;
	} catch (error) {
		console.log(error);
	}
};
