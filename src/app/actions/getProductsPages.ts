import { type Product } from "../types/product";

export const getProductsPages = async () => {
	try {
		const resp = await fetch(`https://naszsklep-api.vercel.app/api/products`);
		const data = (await resp.json()) as Product[];
		return new Array(Math.ceil(data.length / 20)).fill(null).map((_, i) => i + 1);
	} catch (error) {
		console.log(error);
	}
};

export const getProductsPagesGraphQL = async () => {
	try {
		const resp = await fetch(
			`https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clihaom3j03ep01te1dg24yp5/master`,
			{
				method: "POST",
				body: JSON.stringify({
					query: /* GraphQL */ `
						query GetProductsList {
							products {
								id
							}
						}
					`,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		const { data } = (await resp.json()) as { data: { products: Product[] } };
		return new Array(Math.ceil(data.products.length / 5)).fill(null).map((_, i) => i + 1);
	} catch (error) {
		console.log(error);
	}
};
