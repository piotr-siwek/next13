import { ProductsGetListBySearchDocument } from "@/gql/graphql";
import { executeGraphql } from "./utils";

export const getProductsBySearch = async (searchTerm: string) => {
	const graphqlResponse = await executeGraphql(ProductsGetListBySearchDocument, {
		searchTerm,
	});
	return graphqlResponse.products;
};
