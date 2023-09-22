"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export const Search = () => {
	const router = useRouter();
	const debounceRef = useRef<number | undefined>(undefined);
	const [query, setQuery] = useState<string>("");

	return (
		<label>
			<span className="sr-only">Search</span>
			<input
				role="searchbox"
				className="w-[300px] border p-2"
				type="text"
				placeholder="Search"
				value={query}
				onChange={(e) => {
					setQuery(e.target.value);
					clearTimeout(debounceRef.current);
					debounceRef.current = window?.setTimeout(() => {
						// eslint-disable-next-line @typescript-eslint/no-floating-promises
						if (e.target.value) router.push(`/search?query=${encodeURIComponent(e.target.value)}`);
						else router.push(`/search`);
					}, 500);
				}}
				name="query"
			/>
		</label>
	);
};
