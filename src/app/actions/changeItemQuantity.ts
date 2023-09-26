"use server";

import { CartSetProductQuantityDocument } from "@/gql/graphql";
import { executeGraphql } from "./utils";

export const changeItemQuantity = async (productId: string, quantity: number) => {
	await executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: {
			id: productId,
			quantity,
		},
	});
};
