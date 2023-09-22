import { executeGraphql } from "./utils";
import { ProductsGetListDocument } from "@/gql/graphql";

export const getProductsList = async (page = 1, take = 5) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {
		skip: (page - 1) * take,
		first: take,
	});
	return graphqlResponse.products;
};
