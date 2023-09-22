import { executeGraphql } from "./utils";
import { CategoriesGetListDocument } from "@/gql/graphql";

export const getCategoriesList = async () => {
	try {
		const graphqlResponse = await executeGraphql(CategoriesGetListDocument);
		return graphqlResponse.categories;
	} catch (error) {
		console.log(error);
	}
};
