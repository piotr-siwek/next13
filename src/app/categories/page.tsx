import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoriesList } from "../actions/getCategoriesList";

const CategoriesPage = async () => {
	const categories = await getCategoriesList();

	if (!categories) notFound();

	return (
		<main className="mx-auto max-w-md p-12 sm:max-w-2xl">
			<h1>Categories</h1>
			{categories.map((category) => {
				return (
					<Link href={`/categories/${category.slug}/1`} key={category.id}>
						{category.name}
					</Link>
				);
			})}
		</main>
	);
};

export default CategoriesPage;
