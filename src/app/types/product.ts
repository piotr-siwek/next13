export type Markdown = string;

export interface Product {
	id: string;
	title: string;
	category: string;
	price: number;
	description: string;
	longDescription: Markdown;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
}
