import { PaginationItem } from "../molecues/PaginationItem";
import { getProductsPagesGraphQL } from "@/app/actions/getProductsPages";

export const Pagination = async () => {
	const pages = await getProductsPagesGraphQL();

	if (!pages) return null;

	return (
		<nav aria-label="pagination">
			<ul className="flex gap-2">
				{pages.map((item) => (
					<PaginationItem key={item} page={item} />
				))}
			</ul>
		</nav>
	);
};
