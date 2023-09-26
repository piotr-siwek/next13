import { CategoriesGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "./utils";

export const getCategoriesList = async () => {
	try {
		const graphqlResponse = await executeGraphql({ query: CategoriesGetListDocument });
		return graphqlResponse.categories;
	} catch (error) {
		console.log(error);
	}
};
