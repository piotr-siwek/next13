import { type ProductOrderByInput, ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "./utils";

export type OrderBy = "createdAt_ASC" | "createdAt_DESC" | "price_ASC" | "price_DESC";
export const getProductsList = async (page = 1, take = 5, orderBy?: ProductOrderByInput) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			skip: (page - 1) * take,
			first: take,
			orderBy,
		},
		headers: {
			"Cache-Control": "no-store",
		},
		cache: "no-store",
	});
	return graphqlResponse.products;
};
