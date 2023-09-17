import { PaginationItem } from "../molecues/PaginationItem";
import { getProductsPages } from "@/app/actions/getProductsPages";

export const Pagination = async () => {
	const pages = await getProductsPages();

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
