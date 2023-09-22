import { getCategoryProducts } from "@/app/actions/getCategoryProducts";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { type ReactNode } from "react";

const CategoryLayout = async ({
	children,
	params,
}: {
	children: ReactNode;
	params: { categoryName: string };
}) => {
	const items = await getCategoryProducts({
		slug: params.categoryName,
		take: null,
	});
	if (!items) return null;
	const pages = new Array(Math.ceil(items.length / 5)).fill(null).map((_, i) => i + 1);
	console.log({ pages });
	return (
		<div>
			<h1>
				{params.categoryName
					.split("-")
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join("-")}
			</h1>
			{children}
			<nav aria-label="pagination">
				<ul className="flex gap-2">
					{pages.map((page) => (
						<li key={page}>
							<ActiveLink href={`/categories/${page}`} activeClassName="text-blue-500">
								{page}
							</ActiveLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default CategoryLayout;
