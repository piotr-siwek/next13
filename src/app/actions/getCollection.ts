import { executeGraphql } from "./utils";
import { CollectionsGetSingleOpneDocument } from "@/gql/graphql";

export const getCollection = async (slug: string) => {
	const graphqlResponse = await executeGraphql(CollectionsGetSingleOpneDocument, { slug });
	return graphqlResponse.collections[0];
};
