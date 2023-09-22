import { executeGraphql } from "./utils";
import { ProductGetSingleOneDocument } from "@/gql/graphql";

export const getProduct = async (id: string) => {
	try {
		const graphqlResponse = await executeGraphql(ProductGetSingleOneDocument, { id });
		return graphqlResponse.product;
	} catch (error) {
		console.log(error);
	}
};
