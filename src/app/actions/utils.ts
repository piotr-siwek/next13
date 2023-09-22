import { type TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables?: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) throw new Error("GRAPHQL_URL is not defined");

	const resp = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	type GraphqlResponse<TData> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: TData; errors?: undefined };

	const graphqlResponse = (await resp.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error(`GraphQL error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
