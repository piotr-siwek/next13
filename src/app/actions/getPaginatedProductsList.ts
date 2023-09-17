import { type Product } from "../types/product";

export const getPaginatedProductsList = async (page: number, take = 20) => {
	try {
		const resp = await fetch(
			`https://naszsklep-api.vercel.app/api/products?offset=${page * 20}&take=${take}`,
		);
		const data = (await resp.json()) as Product[];
		return data;
	} catch (error) {
		console.log(error);
	}
};
