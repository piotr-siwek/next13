import { type Product } from "../types/product";

export const getProductsPages = async () => {
	try {
		const resp = await fetch(`https://naszsklep-api.vercel.app/api/products`);
		const data = (await resp.json()) as Product[];
		console.log(data.length);
		return new Array(Math.ceil(data.length / 20)).fill(null).map((_, i) => i + 1);
	} catch (error) {
		console.log(error);
	}
};
