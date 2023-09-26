import { ProductGetSingleOneDocument } from "@/gql/graphql";
import { executeGraphql } from "./utils";

export const getProduct = async (id: string) => {
	try {
		const graphqlResponse = await executeGraphql({
			query: ProductGetSingleOneDocument,
			variables: { id },
		});
		return graphqlResponse.product;
	} catch (error) {
		console.log(error);
	}
};
