import { CollectionsGetListDocument } from "@/gql/graphql";
import { executeGraphql } from "./utils";

export const getCollectionsList = async () => {
	const graphqlResponse = await executeGraphql({ query: CollectionsGetListDocument });
	return graphqlResponse.collections;
};
