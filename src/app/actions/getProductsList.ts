import { ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "./utils";

export const getProductsList = async (page = 1, take = 5) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			skip: (page - 1) * take,
			first: take,
		},
	});
	return graphqlResponse.products;
};
