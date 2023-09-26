import { ProductsGetListBySearchDocument } from "@/gql/graphql";
import { executeGraphql } from "./utils";

export const getProductsBySearch = async (searchTerm: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListBySearchDocument,
		variables: {
			searchTerm,
		},
	});
	return graphqlResponse.products;
};
