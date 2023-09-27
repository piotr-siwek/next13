import { CollectionsGetSingleOpneDocument } from "@/gql/graphql";
import { executeGraphql } from "./utils";

export const getCollection = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionsGetSingleOpneDocument,
		variables: { slug },
	});
	return graphqlResponse.collections[0];
};
