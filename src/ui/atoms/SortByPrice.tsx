"use client";

import { useRouter } from "next/navigation";

export const SortyByPrice = () => {
	const router = useRouter();
	return (
		<select
			className="w-full rounded-md border bg-slate-700 px-8 py-3 text-white disabled:cursor-wait disabled:bg-slate-400"
			onChange={(event) => {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				router.push(`/products/?orderBy=${event.target.value}` as any);
			}}
		>
			<option value="price_DESC" data-testid="sort-by-price">
				Price DESC
			</option>
			<option value="price_ASC">Price ASC</option>
		</select>
	);
};

export const SortyByRating = () => {
	const router = useRouter();
	return (
		<select
			className="w-full rounded-md border bg-slate-700 px-8 py-3 text-white disabled:cursor-wait disabled:bg-slate-400"
			onChange={(event) => {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				router.push(`/products/?orderBy=${event.target.value}` as any);
			}}
		>
			<option value="price_DESC">Rating DESC</option>
			<option value="price_ASC" data-testid="sort-by-rating">
				Rating ASC
			</option>
		</select>
	);
};
