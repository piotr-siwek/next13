import { type Product } from "../types/product";

export const getProduct = async (id: string) => {
	try {
		const resp = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
		const data = (await resp.json()) as Product;
		return data;
	} catch (error) {
		console.log(error);
	}
};
